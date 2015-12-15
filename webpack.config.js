var webpack = require('webpack');
var data = require('./data')

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')


module.exports = {
  entry: './entry.js',


  output: {
    path: __dirname,
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: "css-loader!sass-loader"
    }]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
