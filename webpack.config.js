var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    filename: 'pizas.js',
    library: 'pizas',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
