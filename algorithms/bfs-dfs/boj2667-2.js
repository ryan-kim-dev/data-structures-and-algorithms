let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const inputArray = [];
for (let i = 1; i < input.length; i++) {
  const inputValue = input[i].split('').map(item => +item);
  inputArray.push(inputValue);
}

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const 집수 = [];

function dfs(y, x) {
  if (inputArray[y][x] === 1) {
    inputArray[y][x] = 0; // 방문처리
    집수[집수.length - 1]++;
  }

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];
    if (
      ny < 0 ||
      nx < 0 ||
      ny >= inputArray.length ||
      nx >= inputArray[0].length ||
      inputArray[ny][nx] === 0
    )
      continue;
    dfs(ny, nx);
  }
}

for (let i = 0; i < inputArray.length; i++) {
  for (let j = 0; j < inputArray[0].length; j++) {
    if (inputArray[i][j] === 1) {
      집수.push(0);
      dfs(i, j);
    }
  }
}
console.log(집수.length);
집수.sort((a, b) => a - b).forEach(e => console.log(e));
