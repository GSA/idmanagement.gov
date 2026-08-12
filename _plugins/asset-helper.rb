require 'fileutils'

# Note: uswds/img and uswds/fonts moved to assets/ folder instead of assets/uswds/, uswds3.0 was looking for things here.
module AssetHelper
    FOOTER_TAG_SOURCE = 'const preservedHtmlTag = currentElement.getAttribute("data-tag") || currentElement.tagName;'
    FOOTER_TAG_REPLACEMENT = <<~JS.strip
        const requestedTag = currentElement.getAttribute("data-tag");
        const normalizedTag = (requestedTag || currentElement.tagName || "H4").toUpperCase();
        const preservedHtmlTag = normalizedTag === "H4" ? "h4" : "h4";
    JS
    MINIFIED_FOOTER_TAG_SOURCE = 'r=e.getAttribute("data-tag")||e.tagName,r=document.createElement(a?"button":r)'
    MINIFIED_FOOTER_TAG_REPLACEMENT = 'r="h4",r=document.createElement(a?"button":r)'

    def self.harden_footer_tag(file, source, replacement)
        contents = File.read(file)
        return if contents.include?(replacement)

        unless contents.include?(source)
            raise "Expected USWDS footer tag code was not found in #{file}"
        end

        File.write(file, contents.sub(source, replacement))
    end

    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/js/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/img/', 'assets/', verbose: true)
        FileUtils.cp_r('node_modules/@uswds/uswds/dist/fonts/', 'assets/', verbose: true)
        harden_footer_tag('assets/js/uswds.js', FOOTER_TAG_SOURCE, FOOTER_TAG_REPLACEMENT)
        harden_footer_tag('assets/js/uswds.min.js', MINIFIED_FOOTER_TAG_SOURCE, MINIFIED_FOOTER_TAG_REPLACEMENT)
        # The below Ruby code copies individual files from the node package to the assets folder /assets/css/.
        # The FileUtils.copy method copies individual uswds files to the site's existing /assets/css/ folder.
        # This prevents overwriting the /assets/css/ folder that contains other files needed by the site 
        # to run and display properly. Do not change the function below to use the FileUtils.cp_r function(unless you know what you are doing). 
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.css', 'assets/css/', verbose: true)
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.min.css', 'assets/css/', verbose: true)
        FileUtils.copy('node_modules/@uswds/uswds/dist/css/uswds.min.css.map', 'assets/css/', verbose: true)
        @processed = true
    end
end
  
Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end
