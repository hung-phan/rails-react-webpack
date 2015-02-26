'use strict';

var _                   = require('lodash'),
    ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    defaultConfig       = require('./default.config'),
    webpack             = require('webpack');

module.exports = _.merge(defaultConfig, {
  devtool: 'source-map',
  output: {
    path: './public/assets',
    filename: '[name]-[chunkhash].bundle.js',
    chunkFilename: '[id]-[chunkhash].bundle.js'
  },
  plugins: [
    /*new webpack.optimize.CommonsChunkPlugin('common-[chunkhash].bundle.js'),*/
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"', '__DEV__': false }),
    new ChunkManifestPlugin({
      filename: 'webpack-common-manifest.json',
      manfiestVariable: 'webpackBundleManifest'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}, function(obj1, obj2) {
  if (_.isArray(obj1)) { return obj1.concat(obj2); }
});
