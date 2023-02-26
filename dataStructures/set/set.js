// 참고: https://www.youtube.com/watch?v=PAdNyqU85zM&t=339s

// * Set 객체
// 요소 추가: add 메서드
// 요소 삭제: delete 메서드
// 요소 검색: has 메서드
// 요소 개수: size 프로퍼티
// 요소 모두 삭제: clear 메서드
// 요소 순회: forEach 메서드

// Set 객체는 중복되지 않는 유일한 값들의 집합이다.
// 배열과 유사하나 일부 차이점이 있다.
// Set 객체는 배열과 달리 요소의 추가, 삭제, 검색에 대한 시간 복잡도가 O(1)이다. (배열은 O(n))

// * 배열은 요소 순서에 의미가 있으나, Set 객체는 순서가 없다. (인덱스로 접근 불가)
const arr = [1, 2, 3];
console.log(arr[0]); // 1

const set = new Set([1, 2, 3]);
console.log(set[0]); // undefined

// * 배열은 요소의 중복을 허용하지만, Set 객체는 중복을 허용하지 않는다.
const arr2 = [1, 2];
arr2.push(3);
arr2.push(3);
console.log(arr2); // [1, 2, 3, 3]

const set2 = new Set([1, 2]);
set2.add(3);
set2.add(3);
console.log(set2); // Set { 1, 2, 3 }
