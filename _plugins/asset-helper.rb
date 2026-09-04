require 'fileutils'

# Note: uswds/img and uswds/fonts moved to assets/ folder instead of assets/uswds/, uswds3.0 was looking for things here.
module AssetHelper
    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/js/', 'assets/', verbose: true)
        # C2PA mode uses the reviewed, committed image tree. Most packaged USWDS
        # icons are intentionally unsigned; only page-referenced candidates selected
        # by the inventory may be signed by the reconciliation below.
        unless site.config.dig('c2pa', 'enabled')
            FileUtils.cp_r('node_modules/@uswds/uswds/dist/img/', 'assets/', verbose: true)
        end
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/fonts/', 'assets/', verbose: true)
        # The below Ruby code copies individual files from the node package to the assets folder /assets/css/.
        # The FileUtils.copy method copies individual uswds files to the site's existing /assets/css/ folder.
        # This prevents overwriting the /assets/css/ folder that contains other files needed by the site 
        # to run and display properly. Do not change the function below to use the FileUtils.cp_r function(unless you know what you are doing). 
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.css', 'assets/css/', verbose: true)
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.min.css', 'assets/css/', verbose: true)
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.min.css.map', 'assets/css/', verbose: true)
        if site.config.dig('c2pa', 'enabled')
            puts 'Reconciling C2PA signatures after USWDS assets are copied...'
            success = system('node', 'scripts/c2pa/sign.mjs')
            raise 'C2PA signing prerequisite failed' unless success
        end
        @processed = true
    end
end
  
Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end
