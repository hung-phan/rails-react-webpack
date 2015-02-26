'use strict';

var _             = require('lodash'),
    defaultConfig = require('./default.config'),
    webpack       = require('webpack');



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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      '__DEV__': DEBUG
    })
  ]
}, defaultConfig);

module.exports = config;
