const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2667.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
  const inputValue = input[i].split('').map(item => +item);
  inputArray.push(inputValue);
}
// function solution(board) {
//   let answer = '';
//   let home = [];
//   let count = 0;
//   const n = board.length;
//   const dy = [1, 0, -1, 0];
//   const dx = [0, 1, 0, -1];

//   function DFS(y, x) {
//     board[y][x] = 0;
//     count++;
//     for (let k = 0; k < dy.length; k++) {
//       const ny = y + dy[k];
//       const nx = x + dx[k];
//       if (ny >= 0 && nx >= 0 && ny < n && nx < n && board[ny][nx] === 1) {
//         DFS(ny, nx);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         DFS(i, j);
//         home.push(count);
//         count = 0;
//       }
//     }
//   }

//   home.sort((a, b) => a - b);
//   home.unshift(home.length);
//   for (let x of home) {
//     answer += x + '\n';
//   }
//   return answer.trim();
// }
function solution(board) {
  let answer = '';
  let home = [];
  let count = 0;
  const n = board.length;
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  // DFS 함수
  function DFS(y, x) {
    // 0으로 바꿔주고 count 1씩 증가
    board[y][x] = 0;
    count++;
    for (let k = 0; k < dy.length; k++) {
      // 4방 탐색 y축 x축
      const ny = y + dy[k];
      const nx = x + dx[k];
      // 예외조건 확인
      if (ny >= 0 && nx >= 0 && ny < n && nx < n && board[ny][nx] === 1) {
        DFS(ny, nx);
      }
    }
  }
  // board 완전탐색
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // board[i][j]가 1이면 DFS 실행
      if (board[i][j] === 1) {
        DFS(i, j);
        // DFS가 끝나면 count 갯수를 home에 push
        home.push(count);
        // count 변수 초기화
        count = 0;
      }
    }
  }
  // 문제 출력값 오름차순 정렬
  home.sort((a, b) => a - b);
  // 집 갯수를 처음에 표시해야함으로 앞에 넣어줌
  home.unshift(home.length);
  // 정답 정제
  for (let x of home) {
    answer += x + '\n';
  }
  return answer.trim();
}

console.log(solution(inputArray));
