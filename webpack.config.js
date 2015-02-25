'use strict';

var _     = require('lodash'),
  argv    = require('minimist')(process.argv.slice(2)),
  DEBUG   = (argv.env || "development") === "development",
  webpack = require('webpack');

/*
 * Common configuration chunk
 */
var defaultConfig = {
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,
  resolve: {
    modulesDirectories: ['node_modules', 'vendor/assets/bower_components'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?experimental&optional=runtime'
    }]
  }
};


/*
 * Configuration for the client-side bundle
 */
var config = _.extend({
  externals: {
    'jquery': 'window.$',
    'lodash': 'window._',
    'react': 'window.React',
    'react-router': 'window.ReactRouter',
    'superagent': 'window.superagent'
  },
  entry: {
    main: './app/assets/sources/main'
  },
  output: {
    path: './app/assets/javascripts/build',
    publicPath: '/assets/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      '__DEV__': DEBUG
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
}, defaultConfig);

module.exports = config;
