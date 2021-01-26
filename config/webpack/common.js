const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dot = require('dotenv')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const env = dot.config({ path: path.join(process.cwd(), 'config/environment/.env') })

module.exports = {
  entry: ['@babel/polyfill', path.join(process.cwd(), 'src', 'index.js')],
  output: {
    path: path.join(process.cwd(), 'build'),
    filename: 'static/js/main.js',
    chunkFilename: 'static/js/chunks/[name].[contenthash].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: process.cwd(),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public', 'index.html'),
    //   favicon: path.join(process.cwd(), 'public', 'favicon.ico')
    }),
    new MiniCssExtractPlugin({
      path: path.join(process.cwd(), 'build'),
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/main.[contenthash].css'
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: `${path.join(process.cwd())}/src/assets`, to: 'assets' }
    //   ]
    // }),
    new webpack.DefinePlugin({
      'process.env.CUSTOM': JSON.stringify(env.parsed)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(process.cwd(), 'node_modules'),
      path.join(process.cwd(), 'src')
    ],
    alias: {
      '@App': path.join(process.cwd(), 'src/App'),
      '@components': path.join(process.cwd(), 'src/components'),
      '@layouts': path.join(process.cwd(), 'src/layouts'),
      '@pages': path.join(process.cwd(), 'src/pages'),
      '@styles': path.join(process.cwd(), 'src/styles'),
      '@utils': path.join(process.cwd(), 'src/utils')
    }
  }
}
