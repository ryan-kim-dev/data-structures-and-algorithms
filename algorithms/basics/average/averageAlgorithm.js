// [?] n명의 점수 중에서 80점 이상 95점 이하인 점수의 평균

// 평균 알고리즘(Average Algorithm): 주어진 범위에서 주어진 조건에 해당하는 자료들의 평균
// 평균 = 합계 / 개수
(function () {
  // [1] Input
  let data = [90, 65, 78, 50, 95];
  let sum = 0; // 합계를 담을 변수를 초기화
  let count = 0; // 개수를 담을 변수를 초기화
  let N = data.length; // 의사코드
  // [2] Process
  for (let i = 0; i < N; i++) {
    if (data[i] >= 80 && data[i] <= 95) {
      sum += data[i]; // 합계 알고리즘
      count++; // 개수 알고리즘
    }
  }
  let avg = 0.0;
  if (sum != 0 && count != 0) {
    avg = sum / count; // 평균 알고리즘
  }
  // [3] Output
  console.log('80점 이상 95점 이하인 점수의 평균: ' + avg.toFixed(2));
})();
