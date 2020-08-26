const path = require('path');
// npm i html-webpack-plugin, 플러그인이므로 따로 불러와야 한다.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm i -D clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',

  entry: {
    main: './src/app.js'
  },

  output: {
    // 폴더 경로 (node module + path 절대 경로)
    path: path.resolve('./dist'),
    // 파일 이름
    filename: '[name].js'
    // js로 끝나는 entry에 설정한 key값으로 name이 들어간다.
  },

  module: {
    rules: [
      // CSS 불러오기
      // npm i -D css-loader
      // npm i -D style-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 이미지 불러오기
      // npm i -D file-loader
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}