var webpack = require('webpack');
var path = require('path');
var data = require('./data')

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')


module.exports = {
  entry: {
    'main': './entry.js'
  },


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
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
}
