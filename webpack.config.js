'use strict';

var _       = require('lodash'),
    argv    = require('minimist')(process.argv.slice(2)),
    DEBUG   = (argv.env || "development") === "development",
    webpack = require('webpack');

var config = {
  entry: {
    main: './app/assets/sources/main'
  },
  output: {
    path: './app/assets/javascripts/build',
    publicPath: '/assets/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
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
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      '__DEV__': DEBUG
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js')
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
