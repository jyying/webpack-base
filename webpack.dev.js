const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: [path.resolve('./src/index.js')]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: "[name][id][hash].js",
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   IS_DEV: JSON.stringify(true),
    //   'env': "'env'"
    // }),
    new HtmlWebpackPlugin({
      title: 'name',
      template: path.resolve(__dirname, './src/index.html')
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: `${__dirname}/static`,
    //     to: './static'
    //   }
    // ]),
  ]
}
