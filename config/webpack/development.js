const merge = require('webpack-merge');
const path = require('path');
const common = require('./common');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    hot: true,
    port: 3000,
    historyApiFallback: true
  }
})
