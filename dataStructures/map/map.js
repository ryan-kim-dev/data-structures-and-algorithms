/* 참고자료
- https://youtu.be/6DLLaHJi6Ks
- https://www.youtube.com/watch?v=13Ll224kuIQ&t=620s
*/

// 배열 - 순서가 있는 컬렉션을 저장 / Set - 중복되지 않는 값을 저장
// 객체 - 키가 있는 컬렉션을 저장 / Map - 키와 값을 연결하여 저장
// 자바스크립트의 객체(Object)는 타 언어의 해시 테이블(Hash Table)과 유사한 자료구조이다.

// * 1. 기존 객체의 문제점
const user = {};
user.name = 'Ryan';
user.age = 30;
user.sayHi = function () {
  console.log('Hi!');
};
// * 1-1 객체의 key 값은 항상 String 또는 Symbol 타입이어야 한다.
user.1 = 'one'; // SyntaxError: Unexpected number

// * 1-2 요소의 개수를 확인하기 불편하다. - Object.keys().length
console.log(Object.keys(user).length); // 3

// * 1-3. 이터러블하지 않으므로 전개연산자를 사용하거나 for-of 문으로 순회할 수 없다.
// (이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값)
// - for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
// - for of 반복문 : [Symbol.iterator] 속성을 가지는 컬렉션 전용

// * 1-3-1. 전개연산자
console.log(...user); // TypeError: user is not iterable

// * 1-3-2. for-of
const notItterable = (obj) => {
  for (const key of obj) {
    console.log(key);
  }
};
console.log(notItterable(user)); // obj is not iterable

// * 1-4. 값에 접근하는 방식에 일관성이 없다.

// * 1-4-1. dot notation
console.log(user.name); // Ryan

// * 1-4-2. bracket notation
console.log(user['age']); // 30
console.log(user['sayHi']()); // Hi!

////////////////////////////////////////////////////////////////

// * 2. Map 객체
// 요소 취득: get 메서드
// 요소 추가: set 메서드
// 요소 삭제: delete 메서드
// 요소 존재 여부 확인: has 메서드
// 요소 전체 삭제: clear 메서드
// 요소 순회: forEach 메서드
// 요소 개수: size 프로퍼티

const userMap = new Map();
userMap.set('name', 'Ryan');
userMap.set('age', 30);
userMap.set('sayHi', function () {
  console.log('Hi!');
});

// Map 객체는 키-값 쌍을 저장하는 컬렉션이다.
// key-value 쌍의 데이터를 저장한다는 점에서는 기존의 객체와 유사하나,
// 아래와 같이 일반 객체와의 차이점이 존재.

// * 2-1. Map은 키의 타입을 제한하지 않는다.
userMap.set(1, 'one');
userMap.set(true, 'true');
userMap.set(null, 'null');
userMap.set(undefined, 'undefined');
userMap.set(NaN, 'NaN');
userMap.set({}, 'object');
userMap.set([], 'array');

// * 2-2. Map은 이터러블하므로 전개연산자를 사용하거나 for-of, for-each 문으로 순회할 수 있다.
//  - https://ko.javascript.info/keys-values-entries

// * 2-2-1. 전개연산자
console.log(...userMap); // [ 'name', 'Ryan' ] [ 'age', 30 ] [ 'sayHi', [Function] ] [ 1, 'one' ] [ true, 'true' ] [ null, 'null' ] [ undefined, 'undefined' ] [ NaN, 'NaN' ] [ {}, 'object' ] [ [], 'array' ]

// * 2-2-2. for-of
for (const [key, value] of userMap) {
  console.log(key, value);
}

// * 2-2-3. for-each
userMap.forEach((value, key) => {
  console.log(key, value);
});

// * 2-3. 요소의 개수를 알 수 있는 size 프로퍼티를 제공한다.
console.log(userMap.size); // 10
