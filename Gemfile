source "https://rubygems.org"

gem "jekyll", "4.2.2" # pinned awaiting release of https://github.com/jekyll/jekyll/pull/9304 
# gem "execjs", "2.7.0" # Previous version
gem "execjs", "2.9.1" # Latest version
gem "autoprefixer-rails"
gem "webrick" # not included in jekyll directly until 4.3.0 https://github.com/jekyll/jekyll/pull/8524

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "3.0.0"
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
  gem 'jekyll-datapage-generator'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

#gem "html-proofer", "~> 3.19", ">= 3.19.4"
gem "html-proofer", "~> 3.18"


