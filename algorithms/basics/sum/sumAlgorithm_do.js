// 배열의 모든 수를 모두 더한 합은?
// input
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
let N = arr.length;
// process
let i = 0; // 초기식
do {
  sum += arr[i]; // 실행문
  i++; // 증감식
} while (i < N); // 조건식
//output
console.log('합계: ' + sum);
