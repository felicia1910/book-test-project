'use strict'
const webpack = require('webpack')
const path = require('path')
const { resolve } = path

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 縮短專案程式碼中 import 靜態檔案(圖片)的路徑。
        'assets': resolve('src/assets')
      }
    },
    devServer: {
      watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 600
      }
    },
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
