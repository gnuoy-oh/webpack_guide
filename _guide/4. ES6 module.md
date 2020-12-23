# ES6 - Modules

## import / export 기본 문법

- 모듈화 기능을 사용하기 위한 문법.

- 다른 파일에 있는 자바스크립트의 기능을 특정 파일에서 사용할 수 있는 것을 의미한다.

### export

- 다른 파일에서 가져다 쓸 수 있도록 변수나 함수의 앞에 export 라는 키워드를 붙인다.

- import해서 불러와 사용할 수 있다.

~~~
export 변수, 함수;
~~~

### import

- export 된 변수나 함수를 {} 에 선언한 뒤, 해당 파일이 있는 경로를 적어준다.

~~~
import { 불러올 변수 / 함수 이름 } from '파일 경로';
~~~

- 예제

~~~
<!-- 변수 내보내기 -->
// math.js
export vat pi = 3.14;

// app.js
import { pi } from './math.js';

console.log(pi); // 3.14

<!-- 함수 내보내기 -->
// math.js
export var pi = 3.14;
export function sum(a, b) {
  return a + b;
}

// app.js
import { sum } from './math.js';

sum(10, 20); // 30 

~~~

## 웹팩 sourcemap

- 빌드 되기 전 결과물과 빌드 된 후의 결과물을 연결해주는 기능으로 개발자도구 > Sources > 하단 보면 변경된 위치를 표시해준다.

~~~
// package.json
devtool: 'source-map'
~~~
