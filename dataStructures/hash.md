# 해시 테이블

키워드 : 배열과의 차이점, 해시 함수, 해시 충돌,

## 1. 정의

### 1.1 해시 테이블이란

해시 테이블이란 특정 값을 해시 함수를 통해 받아 함수의 반환값을 테이블(일반적으로 배열)에 저장하는 자료구조이다. 이 때 해시 함수가 들어온 값을 처리하는 행위를 **‘해싱’** 이라고 하며 해시 함수의 반환값을 **‘해시**’라고 부른다.

해시 테이블은 해시 충돌로 인해 선형 탐색을 해야 하는 경우같은 예외를 제외하면 일반적으로 **탐색, 추가, 삭제의 시간복잡도가 O(1)로 배열에 비해 훨씬 빠르다. 배열의 경우 선형 탐색 시 O(N)이다.**

해시 테이블은 키-값 쌍을 저장하기 위해 사용된다(Key Value System). 배열과 유사하지만 배열은 인덱스로 요소들의 순서가 정해져 있는 반면 해시 테이블 안의 key들은 순서가 정해져 있지 않다.

자바스크립트에서의 객체, Map 두가지는 기본적으로 해시 테이블이다. 다만 객체의 경우 key는 string 타입이어야 한다는 제약이 있다.

- 배열 사용이 적합한 경우: 순서가 있는 연속적인(sequencial) 흐름을 가진 데이터
- 해시 테이블 사용이 적합한 경우: 위의 경우가 아닌 데이터

### 참고자료

- 유데미 자바스크립트 자료구조 & 알고리즘 [https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28561799#overview](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28561799#overview)
- 노마드코더님 유튜브 강의 해시 테이블 [https://www.youtube.com/watch?v=HraOg7W3VAM&t=320s](https://www.youtube.com/watch?v=HraOg7W3VAM&t=320s)
- evan Moon 님 블로그 글 해시 테이블 [https://evan-moon.github.io/2019/06/25/hashtable-with-js/](https://evan-moon.github.io/2019/06/25/hashtable-with-js/)
