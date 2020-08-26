# step 1

## Core Concept

- webpack.config.js 설정 

### Entry

- 빌드(변환)할 대상 파일을 지정하는 속성으로, entry로 지정한 파일의 내용에는 전체 애플리케이션 로직과 필요 라이브러리를 로딩하는 로직이 들어간다.

- 여러개의 Entry가 존재할 수 있다.

- Default value: './src/index.js'

  - string: 문자열이 들어오는 경우 시작시 로드되는 모듈로 해석 

  - Array: 시작시 모든 모듈이 실행되고 마지막 하나가 내보내진다.

  - Object: 다중 항목 번들이 작성된다.

  - Key: 청크되는 파일의 이름이고, 값을 String / Array이 가능하다.

  ~~~
  // webpack.config.js

  // String
  module.exports = {
    entry: './src/myfolder/file.js'
  }

  // Object
  module.exports = {
    entry: {
      './src/myfolder/file.js'
    }
  }

  // Array
  module.exports = {
    entry: {
      main: ['./src/myfolder/file.js', './src/myfolder/file2.js']
    }
  }
  ~~~

### Output

- 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성

- Default value: ./dist/main.js (경로가 지정되지 않은 경우)

- 생성된 번들 파일들이 ./dist 디렉토리 밑으로 들어가게 된다.

~~~
const path = require('path');

module.exports = {
  <!-- 웹팩 v4부터는 mode 필수 입력 -> production, development, none 옵션 -->
  mode: 'development',

  entry: './src/js/index.js',

  output: {

    <!--  
      filename으로 생성된 번들링을 어느 경로에 생성할 지를 설정한다.
      path에는 절대 경로 설정 (절대값, static으로 사용한다)
      path.resolve() 코드는 인자로 넘어온 경로들을 조합해서 유효한 파일 경로를 만들어주는 Node.js API이다.
    -->
    path: path.resolve('./dist');

    <!-- 
    bundling 된 결과 파일의 이름 
      -->
    filename: 'dist/build.js
  }
}
~~~

- [path 라이브러리 참고](https://nodejs.org/api/path.html)

### Loader

- 빌드할 때 HTML, CSS, Image 파일 등을 JS로 변환하기 위해 필요한 설정을 정의하는 속성으로 웹펙이 이해하고 처리가 가능한 모듈로 변환시키는 작업

~~~
const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    main: './src/app.js'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      <!-- npm i style-loader --save-dev -->
      <!-- npm i css-loader --save-dev -->
      {
        <!-- 정규식으로 표기 -->
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      <!-- npm i file-loader --save-dev -->
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]
          }
        }]
      }
    }]

  }
}
~~~

### Plugins

- 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성

- 로더가 파일 단위로 처리하는 반면, Plugin은 번들된 결과물을 처리한다.

~~~
const path = require('path');

<!-- npm i html-webpack-plugin --save-dev -->
const HtmlWebpackPlugin = require('html-webpack-plugin');

<!-- npm i clean-webpack-plugin --save-dev -->
const {ClearWebpackPlugin} = require('clean-webpack-plugin');
~~~

### Resolve

- 빌드할 때 파일이 어떻게 해석되는지 정의하는 속성

- 특정 Library를 로딩할 때 버전은 어떤 걸로 하고, 파일 경로는 어디로 하는지 등을 지정한다.

### mode (module build option)

- webpack에 내장된 최적화를 사용하도록 지시하는 것으로, none / development / production(기본값)이 존재한다.

- production: 최적화되어 빌드 되어지는 특징

- development: 빠르게 빌드하는 특징

- none: 아무 기능 없이 웹팩으로 빌드 (default)

### 참고

- [공식 문서](https://webpack.js.org/)

- [blog](https://jijong.github.io/2016-12-02/webpack/)

- [blog2](https://webclub.tistory.com/635)

- [webpack VS Gulp](https://kdydesign.github.io/2017/07/27/webpack/)