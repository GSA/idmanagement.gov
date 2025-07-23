source "https://rubygems.org"

gem "jekyll", "4.2.2" # pinned awaiting release of https://github.com/jekyll/jekyll/pull/9304 
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
# gem "wdm", "~> 0.1.0" if Gem.win_platform?

#gem "html-proofer", "~> 3.19", ">= 3.19.4"
gem "html-proofer", "~> 3.18"

# installing csv to silence warning when running local server.
gem 'csv', '~> 3.3', '>= 3.3.5'

# installing base64 gem to avoid warning about missing base64 when running local server.
gem 'base64', '~> 0.3.0'

# Installing bigdecimal gem to avoid warning about missing bigdecimal when running local server.
gem 'bigdecimal', '~> 3.2', '>= 3.2.2'

# Installing wdm gem to avoid warning about missing wdm when running local server on Windows.
# This gem is not required for Jekyll 4.2.2, but it is needed for Windows users to watch files.
# Uncomment the line below if you are on Windows and need file watching capabilities.
# Note: The version is set to '~> 0.2.0' to match compatibility with Jekyll 4.2.2. 
gem 'wdm', '~> 0.2.0' if Gem.win_platform?

# Install fiddle gem to avoid warning about missing fiddle when running local server.
# This gem is not required for Jekyll 4.2.2, but it is needed for Ruby versions that require it.
# Uncomment the line below if you need the fiddle gem.
# Note: The version is set to '~> 1.1' to match compatibility with Jekyll 4.2.2.
# gem 'fiddle', '~> 1.1', '>= 1.1.8'

# Installing logger gem to avoid warning about missing logger when running local server. 
gem 'logger', '~> 1.7'