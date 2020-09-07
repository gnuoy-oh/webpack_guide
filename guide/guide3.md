# ES6

## import / export 기본 문법

- 모듈화 기능을 사용하기 위한 문법

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