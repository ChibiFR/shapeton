const path = require('path');
const BabelMinify = require('babel-minify-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  plugins: [
    new BabelMinify()
  ]
};
