# Update to Ruby 4.0.9 and related gems

source "https://rubygems.org"

# Ruby version, see https://www.ruby-lang.org/en/news/2024/06/28/ruby-4-0-9-released/
ruby "4.0.9"

# Jekyll and related gems, see https://jekyllrb.com/news/2024/06/28/jekyll-4-4-1-released/
gem "jekyll", "4.4.1" #latest
# Jekyll dependencies for Windows
gem "execjs", "2.10.2"
gem "mini_racer" # Fast V8 JS engine runtime wrapper for ExecJS
gem "autoprefixer-rails", "~> 10.6"
# Jekyll plugins for site generation
group :jekyll_plugins do
  gem 'jekyll-feed', '~> 0.18.0'
  gem 'jekyll-redirect-from', '~> 0.17.0'
  gem 'jekyll-paginate-v2', "3.0.0"
  gem 'jekyll-sitemap', '~> 1.4'
  gem 'jekyll-seo-tag', '~> 2.9'
  gem 'jekyll-datapage-generator'
end

# Windows platform specific support
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

platforms :windows do
  gem 'wdm', '~> 0.2.0'
end

# CI/CD Link Validation Engine
gem "html-proofer", "~> 5.2"

# Ruby 4.0 Bundled Gems Compatibility Layer
gem 'csv', '~> 3.3', '>= 3.3.5'
gem 'base64', '~> 0.3.0'
gem "bigdecimal", "~> 4.1"
gem 'logger', '~> 1.7'

# updated: 11/05/2026 - cjb