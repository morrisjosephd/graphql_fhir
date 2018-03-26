const path = require('path')

module.exports = {
  entry: {
    js: ['babel-polyfill', path.join(__dirname, 'src', 'index.js')]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'server', 'dist'),
    filename: 'bundle.js'
  }
}
