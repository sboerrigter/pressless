const webpack = require('webpack');

module.exports = {
  entry: './assets/scripts/main.js',
  output: {
    filename: './public/script.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        query: {
          compact: true,
          presets: ['es2015']
        }
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
  ],
  watch: false
}
