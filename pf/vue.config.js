const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap((options = {}) => {
        options.name = 'assets/pdf/[name].[hash:8].[ext]';
        return options;
      });
  },
  pluginOptions: {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/assets/sass/_common.scss";`,
        },
      },
    },
  },
};
