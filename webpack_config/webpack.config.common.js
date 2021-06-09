const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
  },
  context: path.resolve(__dirname, '../src'),
  plugin: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
              publicPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
};
module.exports = config;
