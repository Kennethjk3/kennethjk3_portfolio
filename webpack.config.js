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
      test: /\.less/,
      loader: 'style!css!less'
    }, {
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.woff2$|\.woff$|\.ttf$|\.svg$|\.eot$/i,
      loader: 'file'
    }]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
