const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      showErrors: true // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
    })
  ],

  devServer: {
    contentBase: "../",
    hot: true,
    inline: true,
    port: 9000,
    open : true
  },

});
