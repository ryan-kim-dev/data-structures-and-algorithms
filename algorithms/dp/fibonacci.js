// * 1. Memoization 방식 피보나치 수열 재귀 코드 - O(N)
// 피보나치 수열의 첫번째, 두번째 숫자가 1인 경우를 가정한다.
// 메모이제이션 할 배열의 인덱스 0에는 값을 담지 않는 예시이다.
// 찾고자 하는 피보나치 숫자가 몇번째인지와 배열에 담아둔 인덱스를 일치시키기 위함.
// 메모이제이션 할 memo 배열에 아래 예제 코드처럼
// 1. 바로 값을 넣어두어도 되고
// 2. 빈 배열로 두어도 되며
// 3. 아예 독립된 변수로 만들어도 된다.
function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

// * 2. Tabulation 방식 피보나치 수열 코드 - 재귀 x, 반복문 사용.
// 반복문을 사용하며, 메모이제이션과 반대로 가장 작은 하위 문제를 푼 결과를
// 테이블(주로 배열)에 저장하고 반복문을 실행하면서 상향식으로 문제를 접근한다.
// 피보나치 수열의 첫번째, 두번째 숫자가 1로 주어짐을 가정하고 배열에 [x, 1, 1] 로 초기화.
// n번째 피보나치 수열의 숫자를 구한다.
// fib(1), fib(2) 가 이미 1로 주어져 있으므로 i는 3부터 시작.
// 따라서 fib(3)부터 fib(4), fib(5) 즉 상향식으로
// 값을 배열에 fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2]로 저장해 나간다.
function fib(n) {
  if (n <= 2) return 1;
  let fibNumbs = [undefined, 1, 1]; // 인덱스 0번은 사용하지 않는 예제 코드.
  for (let i = 3; i <= n; i++) {
    fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2];
  }
  return fibNumbs[n];
}
