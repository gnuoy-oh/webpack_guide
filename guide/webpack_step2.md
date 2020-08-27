# Loaders, Plugin에 대해 정리

## loaders

#### css-loader

- CSS 파일을 찾아 문자열로 정리해준다.

#### style-loader

- css-loader로 읽은 CSS 파일들을 html 파일에서 style태그를 만들어서 head 태그 안에 넣어준다.

#### sass-loader

- 

#### url-loader

- file-loader와 같이 동작 하지만, byte 제한을 설정하여 그 보다 작은 경우, DataURL을 반환해준다.

#### file-loader

## Plugin

#### path

- path에는 절대 경로를 통해 설정해줘야 하는데, __dirname을 사용할 수 있다.

- __dirname ? 현재 경로를 나타낸다.

- .resolve 와 .join 의 차이점..

  - [resolve와 join의 차이점](https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join)

#### mini-css-extract-plugin (MiniCssExtraPlugin)

- JS에 포함된 CSS를 별도의 파일로 추출해준다. 

#### html-webpack-plugin (HtmlWebpackPlugin)

- 번들링한 CSS, JS 파일 등을 HTML 파일에 직접 추가하는 자동화 기능을 한다.

#### clean-webpack-plugin (CleanWebpackPlugin)

- 이 전에 빌드한 결과물을 삭제해서 코드 정리를 하는 플러그인이다.