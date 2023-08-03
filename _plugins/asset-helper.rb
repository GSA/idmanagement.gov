require 'fileutils'

# Note: uswds/img and uswds/fonts moved to assets/ folder instead of assets/uswds/, uswds3.0 was looking for things here.
module AssetHelper
    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/js/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/img/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/fonts/', 'assets/', verbose: true)
        @processed = true
    end
end
  
Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end