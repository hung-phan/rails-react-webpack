module ApplicationHelper
  def webpack_bundle_tag(bundle)
    src =
      if Rails.configuration.webpack[:use_manifest]
        manifest = Rails.configuration.webpack[:asset_manifest]
        filename = manifest[bundle]

        "assets/#{filename}"
      else
        "assets/build/#{bundle}.bundle"
      end

    "<script src='#{src}'></script>".html_safe
  end

  def webpack_manifest_script
    return '' unless Rails.configuration.webpack[:use_manifest]
    javascript_tag "window.webpackManifest = #{Rails.configuration.webpack[:common_manifest]}"
  end
end
