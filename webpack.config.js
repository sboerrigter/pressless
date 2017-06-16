const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'script.js'
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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  watch: false
}
