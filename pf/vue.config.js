const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/assets/sass/_common.scss";`
        }
      }
    }
  }
})
