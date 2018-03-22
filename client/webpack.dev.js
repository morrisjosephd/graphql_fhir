const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, '..', 'server', 'dist'),
    port: 3000
  }
})
