var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')
var path = require("path");


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
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: "css-loader!sass-loader"
    }]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('main', data.routes, data)
  ]
}
