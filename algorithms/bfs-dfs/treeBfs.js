// * 상태 트리 bfs 탐색 예시
// 현재 노드의 값이 1이라면 x2 해서 왼쪽 방향 하위 노드는 2, x2 + 1 해서 오른쪽 방향 하위 노드 3 하는 예제
// 방문한 노드의 값을 저장하는 변수는 answer 이고 예제에선 자료형을 문자열로 함.
// 방문한 노드의 값을 저장하는 변수의 자료형은 주어진 문제에 따라 다르게 하면 된다.

function treeBfs1() {
  let answer = '';
  let queue = [1];
  while (queue.length) {
    // 0이면 큐가 비어서 반복문 종료
    let current = queue.shift(); // Dequeue
    answer += current; // 방문한 노드의 값을 저장.
    for (nextNode of [current * 2, current * 2 + 1]) {
      // for of 문으로 push 한 줄로 2개를 push 함.
      if (nextNode > 7) continue;
      queue.push(nextNode); // Enqueue
    }
  }

  return answer;
}

console.log(treeBfs1()); // 1234567
