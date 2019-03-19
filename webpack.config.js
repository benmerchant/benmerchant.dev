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
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/assets/js/index.js',
    print: './src/assets/js/different.js'
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cache: false,
      title: 'More [html-webpack-plugin]: SASS',
      template: './src/index.html',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Professional website for full stack web developer Ben Merchant.'
        }
      ],
      lang: 'en-US',
      favicon: './src/assets/imgs/logos/logo_red_knockout.ico'
    }),
    // both options are optional
    new MiniCssExtractPlugin({filename: '[name].css',chunkFilename: '[id].css'})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.css$/,
        use: [
          // 'sass-loader',
          // style-loader in development
          // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // removed all of these, now title works just fine
      // {
      //   test: /\.html$/,
      //   // DOCS: use 'include' only to apply to loader modules that actually need to be transformed by it
      //   include: path.resolve(__dirname,'src'),
      //   use: [ // DOCS: apply multiple loaders and options
      //     {
      //       loader: 'html-loader',
      //       options: { minimize: false}
      //     },
      //     {
      //       loader: 'file-loader',
      //       options: { name: 'FILE[name].[ext]' }
      //     }
      //     // {
      //     //   loader: 'extract-loader'
      //     // },
      //   ]
      // }
      // ,
      // { test: /\.(png|svg|jpg|gif|ico)$/, use: ['file-loader'] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
