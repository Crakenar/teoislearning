module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  configureWebpack: {
    module: {
      rules: [ {
        test: /\.md$/,
        loader: 'raw-loader',
      }]
    }
  }
}
