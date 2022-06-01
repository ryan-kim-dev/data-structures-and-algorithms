// 팩토리얼: 팩토리얼: 주어진 수 부터 1까지 차례로 곱하기
// 예시: !4 = 4 * 3 * 2 * 1

// * 1. 반복문으로 팩토리얼 구현하기
function factorial(num) {
  let result = 1; // 초기값을 1로 주어야 *= 해서 값이 들어간다.
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
factorial(4); // 24

// * 2. 재귀 함수로 팩토리얼 구현하기
function factorial(num) {
  if (num == 1) return 1; // 이 탈출 조건이 주어지지 않으면 무한반복.
  return num * factorial(num - 1);
}
factorial(4); // 24
