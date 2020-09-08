// webpack.config.js
// `webpack` command will pick up this config setup by default
// node.js이 module 문법 === path 라이브러리를 사용할 것이다. 라는 선언 
// https://nodejs.org/api/path.html -> output의 유효한 경로를 잡아주는 것이라고 이해하면 됨
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
