// * 메모이제이션 적용 피보나치 수열 재귀 코드 - O(N)
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
