#!/usr/bin/env ruby
# frozen_string_literal: true

require "digest"
require "fileutils"
require "json"
require "openssl"
require "time"

SOURCE_PATH = "_implement/tools/CACertificatesValidatingToFederalCommonPolicyG2.p7b"
OUTPUT_PATH = "_implement/tools/fpki-certificate-hierarchy.json"
EXPECTED_ROOT_SHA256 = "5F9AECC24616B2191372600DD80F6DD320C8CA5A0CEB7F09C985EBF0696934FC"

def extension_value(certificate, oid)
  extension = certificate.extensions.find { |item| item.oid == oid }
  extension&.value
end

def normalize_key_identifier(value)
  return nil if value.nil?

  value.gsub(/[^0-9a-f]/i, "").downcase
end

def dn_parts(name)
  name.to_a.map do |oid, value, _type|
    { "oid" => oid, "value" => value }
  end
end

def display_name(certificate)
  cn = certificate.subject.to_a.find { |oid, _value, _type| oid == "CN" }
  return cn[1] if cn

  ou = certificate.subject.to_a.reverse.find { |oid, _value, _type| oid == "OU" }
  return ou[1] if ou

  certificate.subject.to_s
end

def extension_data(certificate)
  certificate.extensions.map do |extension|
    {
      "oid" => extension.oid,
      "critical" => extension.critical?,
      "value" => extension.value
    }
  end
end

data = File.binread(SOURCE_PATH)
certificates = OpenSSL::PKCS7.new(data).certificates || []

cert_records = certificates.map do |certificate|
  der = certificate.to_der
  sha256 = Digest::SHA256.hexdigest(der).upcase
  sha1 = Digest::SHA1.hexdigest(der).upcase
  subject = certificate.subject.to_s
  issuer = certificate.issuer.to_s
  ski = normalize_key_identifier(extension_value(certificate, "subjectKeyIdentifier"))
  aki = normalize_key_identifier(extension_value(certificate, "authorityKeyIdentifier"))

  {
    "id" => sha256,
    "label" => display_name(certificate),
    "subject" => subject,
    "issuer" => issuer,
    "subject_parts" => dn_parts(certificate.subject),
    "issuer_parts" => dn_parts(certificate.issuer),
    "serial" => certificate.serial.to_s(16).upcase,
    "sha1" => sha1,
    "sha256" => sha256,
    "valid_from" => certificate.not_before.utc.iso8601,
    "valid_to" => certificate.not_after.utc.iso8601,
    "signature_algorithm" => certificate.signature_algorithm,
    "public_key_algorithm" => certificate.public_key.class.name.split("::").last,
    "public_key_bits" => certificate.public_key.respond_to?(:n) ? certificate.public_key.n.num_bits : nil,
    "subject_key_identifier" => ski,
    "authority_key_identifier" => aki,
    "self_issued" => subject == issuer,
    "is_common_policy_g2" => sha256 == EXPECTED_ROOT_SHA256,
    "extensions" => extension_data(certificate)
  }
end

records_by_id = cert_records.to_h { |record| [record["id"], record] }
records_by_subject = cert_records.group_by { |record| record["subject"] }
records_by_ski = cert_records.each_with_object({}) do |record, memo|
  memo[record["subject_key_identifier"]] = record if record["subject_key_identifier"]
end

cert_records.each do |record|
  parent = nil
  parent = records_by_ski[record["authority_key_identifier"]] if record["authority_key_identifier"]

  if parent.nil?
    candidates = records_by_subject[record["issuer"]] || []
    parent = candidates.find { |candidate| candidate["id"] != record["id"] } || candidates.first
  end

  record["issuer_id"] = parent&.fetch("id", nil)
end

def path_to_root(record, records_by_id)
  path = []
  seen = {}
  current = record

  while current && !seen[current["id"]]
    path << current["id"]
    seen[current["id"]] = true
    break if current["self_issued"]

    current = records_by_id[current["issuer_id"]]
  end

  path
end

cert_records.each do |record|
  record["path_to_root"] = path_to_root(record, records_by_id)
end

root = cert_records.find { |record| record["is_common_policy_g2"] }
abort "Expected Federal Common Policy CA G2 root was not found" unless root

payload = {
  "meta" => {
    "source" => SOURCE_PATH,
    "source_last_modified" => File.mtime(SOURCE_PATH).utc.iso8601,
    "certificate_count" => cert_records.length,
    "root_id" => root["id"],
    "root_label" => root["label"],
    "root_sha256" => EXPECTED_ROOT_SHA256
  },
  "certificates" => cert_records.sort_by { |record| [record["label"].downcase, record["sha256"]] }
}

FileUtils.mkdir_p(File.dirname(OUTPUT_PATH))
File.write(OUTPUT_PATH, JSON.pretty_generate(payload))

puts "Generated #{OUTPUT_PATH} with #{cert_records.length} certificates"
