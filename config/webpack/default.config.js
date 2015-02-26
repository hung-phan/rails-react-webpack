'use strict';

var webpack = require('webpack');

module.exports = {
  externals: {
    'jquery': 'window.$',
    'lodash': 'window._',
    'react': 'window.React',
    'react-router': 'window.ReactRouter',
    'superagent': 'window.superagent'
  },
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
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    /*new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),*/
    new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])])
  ]
};
