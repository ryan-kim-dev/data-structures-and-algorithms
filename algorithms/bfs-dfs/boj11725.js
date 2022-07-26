const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './11725.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const edges = input.map(el => el.split(' ').map(Number));

const tree = [...Array(N + 1)].map(() => []);
// 트리 구조 잡기: 빈 배열 1개 안에 빈 배열 8개가 2차원으로 들어가게 생성함.
// N + 1 한 이유: 트리의 최상단은 항상 빈공간으로 남아있기 때문에 한칸더 증설해서 트리 노드자체 틀을 구현

const relations = [];

edges.forEach(([a, b]) => {
  tree[a].push(b);
  tree[b].push(a);
});
// console.log(edges);
// console.log(tree);

const bfs = () => {
  const visited = Array(N + 1).fill(false); // visited = [false, false, false, ... false 8번]
  visited[1] = true;
  let queue = [1];
  let stack;
  while (queue.length) {
    stack = queue;
    queue = [];
    while (stack.length) {
      const node = stack.pop();
      const children = tree[node];
      if (children) {
        children.forEach(child => {
          if (!visited[child]) {
            visited[child] = true;
            relations[child] = node;
            queue.push(child);
          }
        });
      }
    }
  }
};

bfs();
console.log(relations.slice(2).join('\n'));
