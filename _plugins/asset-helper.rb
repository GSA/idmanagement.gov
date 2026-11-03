require 'fileutils'

# Publish the pinned USWDS package without overwriting tracked source assets.
# Run after every write: Jekyll may replace output files during a watch rebuild.
module AssetHelper
  def self.process(site)
    distribution = File.join(site.source, 'node_modules', '@uswds', 'uswds', 'dist')
    assets = File.join(site.dest, 'assets')
    stylesheets = File.join(assets, 'css')
    FileUtils.mkdir_p(stylesheets)

    %w[js img fonts].each do |directory|
      FileUtils.cp_r(File.join(distribution, directory), assets)
    end

    # Copy individual stylesheets so custom site and graph CSS stay intact.
    %w[uswds.css uswds.min.css uswds.min.css.map].each do |filename|
      FileUtils.copy(File.join(distribution, 'css', filename), stylesheets)
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  AssetHelper.process(site)
end
