# Loaders, Plugin에 대해 정리

## loaders

#### babel-loader

- Webpack 모듈이 번들링 할 때 Babel을 이용해서 ES6+ 를 ES5으로 tranpiling 하기 위해 사용한다.

~~~
module: {
  rules: [
    {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    }
  ]
},
~~~

#### babel-polyfill

- 위 Babel을 사용해도, 브라우저가 지원하지 않는 코드가 남아있을 수 있다. 이런 문제를 해결하기 위해 사용한다.


#### css-loader

- CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 변환 / build / bundling / compile을 해준다.

#### style-loader

- css-loader로 읽은 CSS 파일들을 html 파일에서 style태그를 만들어서 head 태그 안에 넣어준다.

#### sass-loader

- scss 파일 형식을 css로 변환한다.

#### file-loader VS url-loader

- 이미지나 폰트 파일을 다룰 때 사용하는 로더이다.

- **file-loader**: 이름과 같이 파일을 로딩한다. 

~~~
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          publicPath: './dist/'
          name: '[name].[ext]?[hash]',
        }
      },
    ],
  },
}
~~~

- 위 예는, svg 파일을 발견하면 file-loader가 실행 되는데, 실행이 되면 output에 설정한 dist 경로로 이미지 파일을 복사한다.

- 복사한 파일은 해쉬 코드로 파일명을 보여주기 때문에, options에서 경로를 바로 잡아주어야 한다.

- **url-loader**: 작은 이미지나 작은 폰트 파일은 복사하지 않고, 문자열 형태로 변환해서 dist 경로로 넣어준다.

~~~
{
  test: /\.svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]?[hash]',
      publicPath: './dist/',
      limit: 10000 // 10kb
    }
  }
}
~~~

- 위 예는, 10kb 미만인 svg 파일을 url-loader로 처리하도록 변경했다.

- 아이콘 처럼 용량이 작거나, 반복해서 사용하지 않는 이미지는 url-loader를 사용하는게 좋을 수 있다!

- [image → file-loader / url-loader 차이 ](https://jeonghwan-kim.github.io/js/2017/05/22/webpack-file-loader.html)

## Plugin

#### path

- path에는 절대 경로를 통해 설정해줘야 하는데, __dirname을 사용할 수 있다.

- __dirname ? 현재 경로를 나타낸다.

- .resolve 와 .join 의 차이점..

  - [resolve와 join의 차이점](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join)

#### mini-css-extract-plugin (MiniCssExtraPlugin)

- JS에 포함된 CSS를 별도의 파일로 추출해줘서, bundle.js에 컴파일된 CSS를 포함시키지 않고 별도의 CSS 파일로 분리해서 하나의 파일로 번들링 해준다.

- Webpack 4 이전 버전에는 extrac-text-webpack-plugin을 사용했었다!

#### html-webpack-plugin (HtmlWebpackPlugin)

- 번들링한 CSS, JS 파일 등을 HTML 파일에 직접 추가하는 자동화 기능을 한다.

#### clean-webpack-plugin (CleanWebpackPlugin)

- 이 전에 빌드한 결과물을 삭제해서 코드 정리를 하는 플러그인이다.

