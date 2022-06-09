// [?] 무작위 데이터를 순서대로[ASC|DESC] 정렬

// 정렬 알고리즘(Sort Algorithm): 가장 [작은|큰] 데이터를 왼쪽으로 순서대로 이동
(function () {
  // [1] Input: 자료구조(array, list, stack, queue, tree, db, ...)
  const data = [3, 2, 1, 5, 4]; // 정렬되지 않은 데이터
  const N = data.length; // 의사코드(psudo-code): 프로그램을 작성할 때 각 모듈이 작동하는 논리를 표현하기 위한 언어

  // [2] Process: Selection Sort(선택 정렬) 알고리즘
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (data[i] > data[j]) {
        // 부등호 방향: 오름차순(>), 내림차순(<)
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp; // 서로 swap한다. 변수끼리 서로 값을 바꿀 때 공식처럼 사용하는 방법.
      }
      // 19~22번 라인의 콘솔로그와 for문은 동작원리를 보여주기 위한 코드로 실제 구현시 쓸 필요는 없다.
      console.log(i + 1 + '회전: ');
      for (let i = 0; i < N; i++) {
        console.log(data[i]);
      }
    }
  }
  // [3] Output: UI(console, web, mobile, desktop, ...)
  for (let i = 0; i < N; i++) {
    console.log(data[i]);
  }
})();
