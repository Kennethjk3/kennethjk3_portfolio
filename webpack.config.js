var webpack = require('webpack');
var data = require('./src/data');
var path = require ('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');


module.exports = {
  entry: ['./src/entry.js'],


  output: {
    path: path.join(__dirname, 'build'),
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
