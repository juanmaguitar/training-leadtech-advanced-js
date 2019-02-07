const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/index.js', // Start point of project
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[chunkhash].js' // Genera el bundle final en dist
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }) // Servidor que va actualizando al vuelo el desarrollo que vamos realizando
  ],
  devServer: {
    contentBase: './src/public'
  }
}
