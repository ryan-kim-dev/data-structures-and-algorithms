# 버블 정렬

구현이 쉬우나 다른 정렬 알고리즘들에 비해 가장 비효율적이다.

```js
// 외부 for문: 배열 전체 순회
// 내부 for문: 요소 2개끼리 비교 & 정렬 완료된 뒷부분 반복에서 제외시키기 위해 -1 -i
// noSwap: 정렬이 일어나지 않으면 break시켜 불필요한 연산 스킵

const bubbleSort = function (arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};
```
