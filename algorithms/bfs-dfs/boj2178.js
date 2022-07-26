const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2178.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
  const inputValue = input[i]
    .trim()
    .split('')
    .map(item => +item);
  inputArray.push(inputValue);
}
console.log(inputArray);

function solution(board) {
  let answer;
  const n = board.length; // 배열이 n개
  const m = board[0].length; // 배열의 요소가 m개
  // 4방 탐색
  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  // BFS를 위한 첫 인자 넣어주기
  const queue = [[0, 0, 0]];
  // Queue에 인자가 없으면 종료
  while (queue.length) {
    const [y, x, path] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      // 범위설정
      if (ny >= 0 && nx >= 0 && ny < n && nx < m && board[ny][nx] === 1) {
        // 0,0 도 포함하여야함
        board[ny][nx] = path + 2;
        queue.push([ny, nx, path + 1]);
      }
    }
  }
  answer = board[n - 1][m - 1];
  return answer;
}

console.log(solution(inputArray));
