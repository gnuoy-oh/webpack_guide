# webpack

## 들어가기 전에

### module

- 복잡하거나 긴 코드를 작성할 때 사용 용도에 따라 파일 단위로 구분한 뒤, 다른 파일에서 해당 클래스나 함수가 필요할 때 import해서 사용할 수 있도록 한다.

  - 웹팩에서는 HTML, CSS, Image, JS 등등 이 파일 하나가 모두 모듈인 것이다.

- 특정 기능을 갖는 작은 코드 단위

- 모듈화 프로그래밍은 기능별로 파일을 나눠가며 프로그래밍을 하는 것으로 유지보수가 쉽다는 장점.

- 예) 3가지 기능을 가지고 있는 module

~~~
function sum(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

const pi = 3.14;

export {sum, substract, pi};
~~~

### Bundler

- **웹페이지를 동작시키기 위한, 서로 연관 관계가 있는 웹 자원(웹앱 애플리케이션의 구성 파일)인 JS, CSS, HTML, Image...와 같은 구성 파일들의 관계들을 Webpack에서 인식해서 Bundling 하게 되면 최종적으로 기존의 원본 파일들을 압축, 축소하여 최적화된 Static 자원(파일)으로 변환해주는 작업(성능 최적화)을 하게 되는데, 이러한 작업을 번들링이라고 한다.**

- 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답을 전달할 수 있는 환경을 만들어주는 역할을 한다.

- 번들러를 사용하면 소스 코드를 모듈 별로 작성할 수 있고, 모듈간 또는 외부 라이브러리의 의존성도 쉽게 관리할 수 있다.

## Webpack

- **Javascript 정적 모듈 번들러로, 웹 애플리케이션을 구성하는 웹 자원(HTML, CSS, JS, Image)을 모두 각각의 모듈로 보고. 이 자원들의 의존성 관계들을 묶고 조합하여 병합된 하나의 JS 결과물을 자동으로 만들어 주는 도구를 의미한다.**

- 서로 연관이 있는 모듈 간의 관계를 해석하여 정적인 자원으로 변환해 주는 변환 도구로 즉, 파일 간의 연관 관계를 파악하여 하나의 자바스크립트 파일로 변환해주는 변환 도구이다.

- 애플리케이션 동작과 관련된 여러 개의 파일 (HTML, CSS, Javascript, image...)들을 1개의 JS파일로 변환한 뒤, 해당 JS 파일만 로딩하면 되도록 하는 도구이다.

  - 하나의 JS파일로 바꾸는 이유는. 웹 앱의 로딩 속도를 향상시키기 위해서다.

  - 웹팩으로 번들되기 전, 여러 개의 파일 (HTML, CSS, Javascript, Image...)들을 브라우저에 나타내기 위해서는 파일마다 서버로 보내는 HTTP 요청이 필요하다. 이 요청 숫자를 줄이기 위해서 웹팩을 사용한다.


### webpack why!!

- HTML, CSS, JS 최소화 / 최적화

- CSS 전처리기 변환

- 이미지 압축 

- JS파일을 하나의 파일로 번들링 해준다.

- npm 패키지들을 frontend code에 사용한다.

- ES6, ES7을 babel과 함께 번들링 컴파일 해준다.

- Use HMR (핫 모듈 리플레이스)

- 어떤 파일이건, Javascript 안에 넣어준다.

### Webpack 철학

- 모든 것은 Module

  - 모든 웹 자원 (HTML, CSS, JS, Image, Webfont,,,)을 모듈 형태로 로딩이 가능하다.

  - Webpack을 사용해서 HTML, CSS, Image 등을 자바스크립트로 로딩(변환)이 가능하도록 지원(Loader)하고 있다.

- 초기에 불필요한 것들을 모두 로딩하지 않고, 필요할 때에 필요한 것만 로딩한다.

### Core Concept

#### Entry

- 빌드(변환)할 대상 파일을 지정하는 속성으로, entry로 지정한 파일의 내용에는 전체 애플리케이션 로직과 필요 라이브러리를 로딩하는 로직이 들어간다.

  - string: 문자열이 들어오는 경우 시작시 로드되는 모듈로 해석 

  - Array: 시작시 모든 모듈이 실행되고 마지막 하나가 내보내진다.

  - Object: 다중 항목 번들이 작성된다.

  - Key: 청크되는 파일의 이름이고, 값을 String / Array이 가능하다.

~~~
// webpack.config.js

// 문자열 작성
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

#### Output

- 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정하는 속성

- 웹펙이 어디에 번들을 만들어 낼 것인지, 어떤 이름으로 파일들을 어떻게 만들 것인지에 대한 것을 정의한다.

- config 파일에 output이 되어있지 않않다면 기본값음 ./dist/main.js이다.

- 생성된 번들 파일들이 ./dist 디렉토리 밑으로 들어가게 된다.

- 기본 entry / output 사용 예

~~~
module.exports = {
  <!-- 웹팩 v4부터는 mode 필수 입력 -> production, development, none 옵션 -->
  mode: 'development',

  entry: './src/js/index.js',

  output: {

    <!--  
      filename으로 생성된 번들링을 어느 경로에 생성할 지를 설정한다.
      __dirname 은 node에서 제공하는 node 파일의 경로를 담고 있는 변수이다.
      __이 붙어있는 변수들은 항상 무엇인가를 담고 있는 특별한 변수이다.
      path에는 절대 경로 설정 (절대값, static으로 사용한다)
      path.resolve() 코드는 인자로 넘어온 경로들을 조합해서 유효한 파일 경로를 만들어주는 Node.js API이다.
    -->
    path: __dirname,

    <!-- 
    bundling 된 결과 파일의 이름 
      -->
    filename: 'dist/build.js
  }
}
~~~

- [path 라이브러리 참고](https://nodejs.org/api/path.html)

#### Loaders

- 빌드할 때 HTML, CSS, Image 파일 등을 JS로 변환하기 위해 필요한 설정을 정의하는 속성으로 웹펙이 이해하고 처리가 가능한 모듈로 변환시키는 작업

#### Plugins

- 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성. 

- 예) 결과물의 사이즈를 줄이거나 혹은 기타 CSS, HTML 파일로 분리하는 기능 등이 있다.

#### Resolve

- 빌드할 때 파일이 어떻게 해석되는지 정의하는 속성

- 특정 Library를 로딩할 때 버전은 어떤 걸로 하고, 파일 경로는 어디로 하는지 등을 지정한다.

#### mode

- webpack에 내장된 최적화를 사용하도록 지시하는 것으로, none / development / production(기본값)이 존재한다.

### Browser Compatibility

## SCSS와 Svg등 자동화 시킬 수 

## webpack을 사용한 스타일 컴파일, svg sprite 자동 생성하는 방법에 대ㅎ

### 참고

- [공식 문서](https://webpack.js.org/)

- [blog](https://jijong.github.io/2016-12-02/webpack/)

- [blog2](https://webclub.tistory.com/635)

- [webpack VS Gulp](https://kdydesign.github.io/2017/07/27/webpack/)