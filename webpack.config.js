/*
 * Title: webpack.config.js
 *
 * Description: config file for webpack bundling
 *
 * Author: Ben Merchant
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { app: path.join(__dirname, 'src/app/main.module.js') },
  mode: 'development',
  devtool: 'eval',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cache: false,
      title: 'Ben Merchant dot Dev',
      template: path.join(__dirname, 'src/index.html'),
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional website for full stack web developer Ben Merchant.' }
      ],
      lang: 'en-US',
      favicon: path.resolve(__dirname, 'src/app/assets/imgs/logos/logo_red_knockout.ico')
    }),
    new MiniCssExtractPlugin({filename: '[name].css',chunkFilename: '[id].css'})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // include: [
        //   path.resolve(__dirname,'src/app/assets/styles/vendor/primitive/main.scss'),
        //   path.resolve(__dirname,'src/assets/main.scss')
        // ],
        use:
          [
            // This plugin should be used only on production builds without style-loader in the loaders chain, especially if you want to have HMR in development.
            //https://github.com/webpack-contrib/mini-css-extract-plugin
            MiniCssExtractPlugin.loader,
            // 'style-loader',
            //////// @sbadri2001 Acc to documentation:This is what style-loader do:Adds CSS to the DOM by injecting a <style> tag
            //////// & this is what ExtractTextWebpackPlugin do:extract text from a bundle, or bundles, into a separate file.
            'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('node-sass') }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      // image loader
      { test: /\.(png|svg|jpg|gif)/, use: ['file-loader'] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
