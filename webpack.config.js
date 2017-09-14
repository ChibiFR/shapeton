const path = require('path');
const BabelMinify = require('babel-minify-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new BabelMinify()
  ]
};
