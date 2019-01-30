/* eslint-disable */
const path = require("path"); //modulo de node nativo
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), //se encarga de añadir los tagscripts
  ],
  devServer: {
    contentBase: "./src/public"
  }
};