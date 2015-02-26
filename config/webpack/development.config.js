'use strict';

var _             = require('lodash'),
    defaultConfig = require('./default.config'),
    webpack       = require('webpack');

module.exports = _.merge({
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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true })
  ]
}, defaultConfig, function(obj1, obj2) {
  if (_.isArray(obj1)) { return obj1.concat(obj2); }
});
