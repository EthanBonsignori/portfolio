const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 4000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new Dotenv()],
});
