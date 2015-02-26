'use strict';

var _                   = require('lodash'),
    ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
    defaultConfig       = require('./default.config'),
    webpack             = require('webpack');

module.exports = _.merge({
  devtool: '#inline-source-map',
  plugins: [
    /*new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),*/
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true })
  ]
}, defaultConfig, function(obj1, obj2) {
  if (_.isArray(obj1)) { return obj1.concat(obj2); }
});
