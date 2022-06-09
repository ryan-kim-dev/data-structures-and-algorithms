// * 이진 검색 알고리즘
/**
1. 정렬된 배열을 인자로 받는 이진 검색 함수를 정의한다.
2. 좌측 포인터와 우측 포인터, 중간값 3개의 변수를 선언한다.
   start: 배열의 시작
   end: 배열의 끝
   middle: 중간값
3. for문 선언: 좌측 포인터가 우측 포인터가 앞에 있는(더 작은 인덱스) 동안에만 반복문이 계속되게 해야 한다.
    - 원하는 값을 찾으면 인덱스를 리턴.
    - 값이 너무 작을 경우 좌측 포인터의 값을 중간 인덱스로 재할당.
    - 값이 너무 클 경우 우측 포인터의 값을 중간 인덱스로 재할당.
    - 원하는 값을 찾지 못할 경우 -1을 리턴.
 */

function binarySearch(sortedArr, target) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2); // 올림 해도 상관없음.
  while (sortedArr[middle] !== target) {
    // 찾는 수가 중간값보다 작거나 큰 경우의 좌, 우 포인터 재할당
    target < sortedArr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2); // 중간값 재할당
  }
  return sortedArr[middle] === target ? middle : -1;
}

console.log(binarySearch([1, 3, 6, 7, 9, 12, 15, 17, 20, 24, 26, 30], 24));
