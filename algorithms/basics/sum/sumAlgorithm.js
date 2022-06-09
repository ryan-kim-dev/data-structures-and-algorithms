// n명의 점수 중에서 80점 이상인 점수의 합계

// input - n명의 점수
let scores = [100, 75, 50, 37, 90, 95];
let sum = 0; // 합계가 담길 그릇(변수)
let N = scores.length; // 의사코드
// process
for (let i = 0; i < N; i++) {
  if (scores[i] >= 80) {
    sum += scores[i];
  }
}

// output
console.log(N + '명의 점수 중 80점 이상의 총점: ' + sum);
