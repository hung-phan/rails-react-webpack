'use strict';

var webpack = require('webpack'),
    _       = require('lodash'),
    argv    = require('minimist')(process.argv.slice(2)), 
    DEBUG_MODE = (argv.env || "development") === "development";

var config = {
  entry: {
    page: './app/assets/sources/main'
  },
  output: {
    path: './app/assets/javascripts/build',
    publicPath: './app/assets/javascripts/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  cache: DEBUG_MODE,
  debug: DEBUG_MODE,
  devtool: DEBUG_MODE ? '#inline-source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG_MODE
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?experimental&optional=runtime'
      }
    ]
  }
};

module.exports = config;
