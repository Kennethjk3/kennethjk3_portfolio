var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')
var path = require("path");


module.exports = {
  entry: './entry.js',

  output: {
    path: path.resolve(__dirname + "/build"),
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
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
