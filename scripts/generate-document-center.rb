#!/usr/bin/env ruby
# frozen_string_literal: true

require "date"
require "json"
require "open3"
require "pathname"
require "rexml/document"
require "time"

ROOT = Pathname.new(File.expand_path("..", __dir__))
DOCS = ROOT.join("docs")
OUTPUT = ROOT.join("assets/data/document-center.json")
SUPPORTED_TYPES = {
  ".pdf" => ["pdf", "PDF"],
  ".docx" => ["docx", "Word"],
  ".xlsx" => ["xlsx", "Excel"],
  ".pptx" => ["pptx", "PowerPoint"]
}.freeze

def run(*command)
  stdout, _stderr, status = Open3.capture3(*command, chdir: ROOT.to_s)
  status.success? ? stdout : ""
end

def parse_date(value)
  return nil if value.nil? || value.strip.empty?

  DateTime.parse(value.sub(/\A(?:D:)?/, "")).to_date.iso8601
rescue Date::Error
  nil
end

def git_date(path, mode)
  args = ["git", "log", "--follow", "--format=%aI"]
  args << "--diff-filter=A" if mode == :created
  values = run(*args, "--", path).lines.map(&:strip).reject(&:empty?)
  parse_date(mode == :created ? values.last : values.first)
end

def core_properties(path)
  xml = run("unzip", "-p", path, "docProps/core.xml")
  return {} if xml.empty?

  document = REXML::Document.new(xml)
  properties = {}
  {
    author: "//dc:creator",
    created: "//dcterms:created",
    modified: "//dcterms:modified",
    version: "//cp:version",
    last_modified_by: "//cp:lastModifiedBy"
  }.each do |key, xpath|
    element = REXML::XPath.first(document, xpath, {
      "dc" => "http://purl.org/dc/elements/1.1/",
      "dcterms" => "http://purl.org/dc/terms/",
      "cp" => "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
    })
    properties[key] = element.text.to_s.strip unless element.nil? || element.text.to_s.strip.empty?
  end
  properties
rescue REXML::ParseException
  {}
end

def pdf_properties(path)
  properties = {}
  run("pdfinfo", path).each_line do |line|
    key, value = line.split(":", 2).map { |part| part&.strip }
    next if value.nil? || value.empty?

    properties[:author] = value if key == "Author"
    properties[:created] = value if key == "CreationDate"
    properties[:modified] = value if key == "ModDate"
  end
  properties
end

def pdf_signatures(path)
  output, _stderr, _status = Open3.capture3("pdfsig", path, chdir: ROOT.to_s)
  return { status: "not_checked", label: "Not checked", count: 0 } if output.empty?
  return { status: "unsigned", label: "Unsigned", count: 0 } if output.include?("does not contain any signatures")

  count = output.scan(/Signer Certificate Common Name:/).length
  return { status: "unsigned", label: "Unsigned", count: 0 } if count.zero?

  signer = output[/Signer Certificate Common Name:\s*(.+)$/, 1]&.strip
  signing_time = output[/Signing Time:\s*(.+)$/, 1]&.strip
  signature_validations = output.scan(/Signature Validation:\s*(.+)$/).flatten
  certificate_validations = output.scan(/Certificate Validation:\s*(.+)$/).flatten

  if signature_validations.any? { |value| value.match?(/invalid|digest mismatch|failed/i) }
    status = "invalid"
    label = "Invalid signature"
  elsif signature_validations.all? { |value| value.match?(/valid/i) } &&
        certificate_validations.all? { |value| value.match?(/certificate is trusted|validation successful/i) }
    status = "valid"
    label = "Valid signature"
  else
    status = "validity_unknown"
    label = "Signed; validity unknown"
  end

  {
    status: status,
    label: label,
    count: count,
    signer: signer,
    signing_date: parse_date(signing_time),
    validation_summary: (signature_validations + certificate_validations).join(" ")
  }.compact
end

def inferred_version(filename)
  stem = File.basename(filename, File.extname(filename))
  match = stem.match(/(?:^|[-_])v(?:ersion)?[-_ ]?(\d+(?:[._-]\d+){0,2})(?:$|[-_])/i)
  match ||= stem.match(/(?:^|[-_])(rev[-_ ]?[a-z0-9]+)(?:$|[-_])/i)
  return nil unless match

  match[1].tr("_", ".")
end

documents = Dir.glob(DOCS.join("**/*")).select { |path| File.file?(path) }.filter_map do |absolute_path|
  extension = File.extname(absolute_path).downcase
  next unless SUPPORTED_TYPES.key?(extension)

  relative = Pathname.new(absolute_path).relative_path_from(ROOT).to_s
  docs_relative = Pathname.new(absolute_path).relative_path_from(DOCS).to_s
  scope = if docs_relative.start_with?("archived/")
            "archived"
          elsif docs_relative.start_with?("expdocs/")
            "experimental"
          else
            "active"
          end
  embedded = extension == ".pdf" ? pdf_properties(relative) : core_properties(relative)
  version = embedded[:version] || inferred_version(relative)
  created = parse_date(embedded[:created]) || git_date(relative, :created)
  modified = parse_date(embedded[:modified]) || git_date(relative, :modified)
  type, type_label = SUPPORTED_TYPES.fetch(extension)

  {
    id: relative.downcase.gsub(/[^a-z0-9]+/, "-").sub(/-+\z/, ""),
    filename: File.basename(relative),
    path: "/#{relative.split("/").map { |part| part.gsub(" ", "%20") }.join("/")}",
    relative_path: relative,
    type: type,
    type_label: type_label,
    scope: scope,
    size_bytes: File.size(absolute_path),
    author: embedded[:author],
    created: created,
    created_source: embedded[:created] ? "embedded metadata" : "Git history",
    modified: modified,
    modified_source: embedded[:modified] ? "embedded metadata" : "Git history",
    version: version,
    version_source: embedded[:version] ? "embedded metadata" : (version ? "filename (inferred)" : nil),
    signature: extension == ".pdf" ? pdf_signatures(relative) : nil
  }.compact
end

documents.sort_by! { |document| [document[:type], document[:filename].downcase] }
payload = {
  generated_at: Time.now.utc.iso8601,
  document_count: documents.length,
  documents: documents
}

OUTPUT.dirname.mkpath
OUTPUT.write(JSON.pretty_generate(payload) + "\n")
puts "Wrote #{documents.length} documents to #{OUTPUT.relative_path_from(ROOT)}"
