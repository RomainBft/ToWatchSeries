module.exports = {
  pwa: {
    name: 'ToSeeSeries',
    themeColor: '#160f2e',
    manifestOptions: {
      background_color: '#fff'
    }
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(400000)
      .maxAssetSize(400000)
  }
}