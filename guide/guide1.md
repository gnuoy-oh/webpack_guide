# Node.js와 NPM (Webpack에 들어가기 전)

## Node.js

- 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미한다. 

  ~~~
  // 명령어
  node -v // v12.16.3

  npm -v // 6.14.4

  // npm 초기화 
  npm init 
  ~~~

## NPM

- Node Package Manager: 자바스크립트 라이브러리를 설치하고 관리해주는 도구, 패키지(라이브러리) 매니저이다. 

- 전 세계 자바스크립트 개발자들이 모두 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 편하게 다운로드 받을 수 있다.

- Node.js를 설치하면 NPM도 같이 설치된다.

- NPM 초가화 명령어로 package.json 파일을 생성하고 나면 프로젝트에서 사용할 자바스크립트 라이브러리를 설치하게 된다.

~~~
// Terminal
npm init -y

//Package.json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
~~~

### NPM의 장점

- 다양한 라이브러리의 버전과 의존성이 편리하게 잘 관리된다.

- npm install을 통해서 다양한 라이브러리를 번거롭지 않게 사용할 수 있다.

#### NPM 지역 설치

- 라이브러리를 로컬 내부에도 설치하는 것

~~~
//Terminal
npm install gulp --save-prod (배포용 라이브러리 설치 - dependencied)

npm install gulp --save-dev (개발용 라이브러리 설치 - devDependencies)

// same as above 
npm i gulp

npm i gulp -D
~~~

#### NPM 지역 설치 2가지

- 위에서 설치 옵션에 아무것도 넣지 않은 npm i gulp는 **dependencies**에 등록된다.

~~~

// dependencies
npm i gulp 

npm run build

~~~

  - 애플리케이션의 DOM 동직을 위한 라이브러리를 담아준다.

  - 화면 로직과 직접적인 연관이 있는 라이브러리

  - 예) Vue, React, Angular, chart 등

  - 배포할 때는 devDependencies가 실행되지 않는다.

- 위에서 설치 옵션으로 -D를 넣을 경우에는 **devDependencies**에 등록된다.

~~~

// devDependencies
npm i vue -D

npm run prod

~~~

  - 개발할 때 도움을 주는, 개발 보조 라이브러리를 담아준다.

  - 빌드하고 배포할 때 애플맄이션 콛에서 빠지게 된다.

  - 따라서 최종 애플리케이션에 포함되어야 하는 라이브러리는 -D로 설치해선 안된다!

  - 개발할 때만 사용하고, 배포할 때는 빠져도 좋은 라이브러리 예시

  - webpack, eslint, imagemin, js-compression, scss, postCss, cssnano 등등

#### NPM 전역 설치

- 시스템 레벨의 전역으로 사용할 목적으로 설치하는 것으로, CLI 명령어 실행을 하기 위해서 전역으로 설치한다.

- **전역으로 설치하면 해당 라이브러리의 이름을 입력했을 때 명령어를 인식한다.**

~~~
// Terminal
npm install gulp --global

gulp
~~~

#### NPM 전역 설치 경로

- 아래 경로로 들어가서 open . 해보면 내가 전역으로 설치한 라이브러리를 확인할 수 있다.
~~~
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
~~~
