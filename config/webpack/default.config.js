'use strict';

var path    = require('path'),
    webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../', '../'),
  entry: {
    main: './app/frontend/javascripts/main'
  },
  output: {
    path: './app/assets/javascripts/build',
    publicPath: 'http://localhost:8080/assets/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  externals: {},
  resolve: {
    modulesDirectories: ['node_modules', 'vendor/assets/bower_components'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules(?!.*(\/js-csp))/,
      loader: 'babel-loader?experimental&optional=runtime'
    }]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])])
  ]
};
