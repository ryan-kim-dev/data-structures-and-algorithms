function permutate(arr) {
  const result = [];

  // DFS
  const dfs = (i, arr) => {
    // base condition
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // DFS 재귀 호출
      dfs(i + 1, arr);
      // swap back : 리프 노드에서 다시 한 레벨 위로(undo)
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  dfs(0, arr); // entry point
  return result;
}

console.log(permutate([1, 2, 3]));
/*
[
    [ 1, 2, 3 ],
    [ 1, 3, 2 ],
    [ 2, 1, 3 ],
    [ 2, 3, 1 ],
    [ 3, 2, 1 ],
    [ 3, 1, 2 ]
  ]
*/
