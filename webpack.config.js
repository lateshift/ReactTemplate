const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const IS_DEVMODE = process.env.NODE_ENV !== 'production'

const VERSION = '0.1';

const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.VERSION': VERSION
});

const htmlWebpack = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'app/template.html',
  title: `RentalCal ${VERSION}`,
});

module.exports = {
  mode: 'development',
  entry: {
    app: './app/app.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    definePlugin,
    new CleanWebpackPlugin(['dist']),
    htmlWebpack,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.less$/,
        use: [
          IS_DEVMODE ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}