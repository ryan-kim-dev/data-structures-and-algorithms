// 1부터 1000 까지의 정수 중 13의 배수의 개수는?
// 합계 알고리즘 - 주어진 범위에서 주어진 조건에 해당하는 자료의 개수 또는 횟수

// [1]Input
let count = 0; // 개수를 저장할 변수를 0으로 초기화
// [2]Process
for (let i = 1; i <= 1000; i++) {
  // 주어진 조건으로 필터링
  if (i % 13 === 0) {
    count++; // count += 1; 과 동일
  }
}
// [3]Output
console.log('1부터 1000까지의 정수 중 13의 배수의 개수: ' + count);
