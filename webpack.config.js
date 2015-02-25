'use strict';

var webpack = require('webpack'),
    _       = require('lodash'),
    argv    = require('minimist')(process.argv.slice(2));

var DEBUG_MODE = !argv.production;

/*
 * Webpack configuaration
 */

var config = {
  cache: DEBUG_MODE,
  debug: DEBUG_MODE,
  devtool: DEBUG_MODE ? '#inline-source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG_MODE
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};

module.exports = config;
