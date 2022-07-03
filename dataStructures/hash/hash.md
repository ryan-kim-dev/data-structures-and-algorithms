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

## 2. 해시 함수

해시 함수는 입력된 데이터가 어떠한 크기를 가지던 간에 정해진(fixed) 크기의 데이터를 출력하는 함수를 말한다. 즉, 입력값을 측정해서(Map), 정해진 크기의 출력값을 내보낸다.
예를 들어, 사람이 전화번호 전체를 외우기 보다 뒷 번호만 외우는 게 편리한 것처럼 복잡하고 긴 데이터를 접근하기 쉽게 작은 크기의 데이터로 바꿔준다라고 비유할 수 있다.
해시 함수는 해시 테이블에서 뿐만 아니라 **정보 보호, 저장, 사이트 로그인 인증, 암호화폐** 등에도 사용된다.

### 2.1 좋은 해시 함수란

- 빨라야 한다. (불필요한 연산 x)
- 해시 테이블에 데이터를 분배하는 방식이 일정해야 하며 분배 시 데이터가 겹치지 않아야 한다. (해시 충돌 방지 필요)
- **입력값이 같으면 출력값도 같아야 한다.** (deterministic 해야 한다) 따라서 `Math.random` 같은 건 사용 x.

### 2.2 해시 함수 작성하기

`str.charCodeAt(index)` : 주어진 문자열 중 해당 index인 문자의 utf 16 character code 값.
예를 들어 문자열 데이터를 문자열의 길이에 따라 해시 테이블에 저장하려고 할 경우 길이가 같은 문자열은 이중 배열로 저장하지 않는다면 해시 충돌이 발생한다. 따라서 이 때 utf 16 character code의 값으로 해시 테이블에 저장함이 바람직하다.
utf 16 character code: 모든 글자는 각각에 해당하는 숫자값을 가진다. 이 숫자값을 일컫는 말이다.
`"a".charCodeAt(0) - 96;` : 반환값에서 96을 빼면 알파벳의 순서값만 받을 수 있다. (ex: a는 1 반환)

## 3. 해시 테이블 구현 - 프로그래머스: 위장

### 3.1 일반 객체 방식

```js
// 해시 : 빈도수 정렬 혹은 탐색 용도
// 이 문제는 빈도수 정렬
function solution(clothes) {
// 객체로 빈도수 정렬
// 1. 요소의 타입 확인
    // obj[type[1]]
    let answer = 1;
   const obj = {};
    for (type of clothes) {
        if (obj[type[1]]) {
            obj[type[1]] += 1;
        } else {
            obj[type[1]] = 1;
        }
    }
  for (key in obj) {
      answer *= obj[key] + 1; // 해당 타입 중 아무것도 안 입었을 때 경우의 수 1을 더한다
  }
   return answer - 1; // 아예 아무것도 안 입었을 경우의 수 1을 뺀다
```

### 3.2 Map 사용

```js
// Map 기본 사용법

// 일반 객체를 사용한 경우
let user = {};
user.name = 'Ryan';
user.age = '10';
user.number = '01012345678';

console.log(user);
/*
{name: 'Ryan', age: '10', number: '01012345678'}
    age: "10"
    name: "Ryan"
    number: "01012345678"
[[Prototype]]: Object
*/

// Map 객체 사용
let userMap = new Map();

// 1. set: key값과 value 값 지정.
userMap.set('name', 'Ryan');
userMap.set('age', '10');
userMap.set('number', '01012345678');

console.log(userMap);
/*
Map(3) {'name' => 'Ryan', 'age' => '10', 'number' => '01012345678'}
[[Entries]]
    0: {"name" => "Ryan"}
        key: "name"
        value: "Ryan"
    1: {"age" => "10"}
        key: "age"
        value: "10"
    2: {"number" => "01012345678"}
        key: "number"
        value: "01012345678"
size: 3
[[Prototype]]: Map
*/

// 2. get: 인수로 넣은 key에 해당하는 value 값을 반환.
userMap.get('name'); // 'Ryan'

// 3. has : Map 객체에 지정된 요소가 있는지 여부를 boolean 값으로 반환.
// 기존 방식
let guestArr = [
  { number: 1, city: 'Seoul' },
  { number: 2, city: 'Suwon' },
  { number: 3, city: 'Daegu' },
  { number: 4, city: 'Busan' },
  { number: 5, city: 'Seoul' },
];

let oGuest = {};
guestArr.forEach(item => {
  if (!oGuest[item.city]) {
    // oGuest 객체에 해당 city가 없으면
    // 동적 프로퍼티 생성 - 객체를 가진 배열을 프로퍼티로
    oGuest[item.city] = [];
  }
  oGuest[item.city].push(item); // city가 있으면 해당 도시의 프로퍼티에 추가
});

// Map 방식 - has 메서드 사용
let mapGuest = new Map();
guestArr.forEach(item => {
  if (!mapGuest.has(item.city)) {
    mapGuest.set(item.city, []);
  }
  mapGuest.get(item.city).push(item);
});
```

- key 값을 일반 객체와 달리 어떤 자료형이든 사용할 수 있음. key 값으로 객체나 함수도 가능.
- Map 객체를 생성하며 인수 전달 시 키-값 쌍의 **이터러블** 만 가능. 키 중복 시 값이 덮어씌워지므로 중복된 키를 갖는 요소가 존재할 수 없음.
- 이터러블하므로 forEach문 사용 가능.
- Map객체의 메서드와 프로퍼티
  - size: 요소 개수 확인 프로퍼티. \*size 는 메서드가 아니라 프로퍼티다.
  - set : 요소 추가 메서드. (key 값과 value 값 지정)
  - get : 요소 취득 메서드. (Map 객체의 key값을 인수로 입력하여 해당 key의 value를 반환)
  - has : 요소 존재 여부 확인 메서드. (Map 객체에 지정된 요소가 있는지 여부를 boolean 값으로 반환)
  - delete : 요소 삭제 메서드.
  - clear : 요소 일괄 삭제 메서드.

### 참고자료

- [유데미 자바스크립트 자료구조 & 알고리즘](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28561799#overview)
- [노마드코더님 유튜브 강의 해시 테이블](https://www.youtube.com/watch?v=HraOg7W3VAM&t=320s)
- [evan Moon 님 블로그 글 해시 테이블](https://evan-moon.github.io/2019/06/25/hashtable-with-js/)

- [자바스크립트 - 이제 키-값을 저장하기 위해서 Object 쓰지 말고, new Map()을 사용하자.](https://www.youtube.com/watch?v=6DLLaHJi6Ks)
