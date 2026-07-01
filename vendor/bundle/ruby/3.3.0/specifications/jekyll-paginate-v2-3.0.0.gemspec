# -*- encoding: utf-8 -*-
# stub: jekyll-paginate-v2 3.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-paginate-v2".freeze
  s.version = "3.0.0".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Sverrir Sigmundarson".freeze]
  s.date = "2020-02-07"
  s.description = "An enhanced zero-configuration in-place replacement for the now decomissioned built-in jekyll-paginate gem. This pagination gem offers full backwards compatability as well as a slew of new frequently requested features with minimal additional site and page configuration. Optional features include auto-generation of paginated collection, tag and category pages.".freeze
  s.email = ["jekyll@sverrirs.com".freeze]
  s.homepage = "https://github.com/sverrirs/jekyll-paginate-v2".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0".freeze)
  s.rubygems_version = "2.7.10".freeze
  s.summary = "Pagination Generator for Jekyll 3 and newer".freeze

  s.installed_by_version = "3.6.7".freeze

  s.specification_version = 4

  s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.0".freeze, "< 5.0".freeze])
  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.5".freeze])
  s.add_development_dependency(%q<rake>.freeze, ["~> 10.4".freeze])
  s.add_development_dependency(%q<minitest>.freeze, ["~> 5.4".freeze])
end
