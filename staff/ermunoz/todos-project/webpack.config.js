const path = require('path')
const webpack = require('webpack') // eslint-disable-line no-unused-vars
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-polyfill')

module.exports = {
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[chunkhash]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    contentBase: './src/public'
  }
}
