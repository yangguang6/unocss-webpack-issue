const { defineConfig } = require('@vue/cli-service')
const UnoCSS = require('unocss/webpack').default
// const { presetUno } = require('unocss/preset-uno')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      UnoCSS({ /* options */ }),
    ]
  }
})
