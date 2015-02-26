'use strict';

var _             = require('lodash'),
    defaultConfig = require('./default.config'),
    webpack       = require('webpack');

module.exports = _.merge({
  cache: true,
  debug: true,
  outputPathinfo: true,
  devtool: '#inline-source-map',
  plugins: [
    /*new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),*/
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true })
  ]
}, defaultConfig, function(obj1, obj2) {
  if (_.isArray(obj1)) { return obj1.concat(obj2); }
});
