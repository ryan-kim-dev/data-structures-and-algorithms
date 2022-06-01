function countDown(num) {
  if (num <= 0) return console.log('탈출 조건에 걸려 재귀함수 종료.');
  console.log(num);
  num--;
  countDown(num);
}
countDown(5);

// * 재귀 함수의 필수 구성요소: 1. 탈출 조건 (조건문, 비교할 값의 변화)
// * 재귀 함수는 탈출 조건(base case)이 없는 경우 무한반복되어 스택 오버플로우 현상이 발생된다.
// * 따라서 탈출 조건이 주어져야 하며, 반복 시마다 값 또한 변화되어야 계속 같은 값으로 같은 결과를 내는 것을 막을 수 있다.
