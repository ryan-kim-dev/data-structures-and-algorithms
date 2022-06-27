# 동적 프로그래밍

Colt Steele 저자의 유데미 [Javascript 자료구조 & 알고리즘](<[https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28562275#questions](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28562275#questions)>) 강의를 바탕으로 공부 내용을 정리합니다.

## 1. 정의

동적 프로그래밍은 복잡한 문제를 더 간단한 하위 문제들의 모음으로 분해하여 각각의 하위 문제들을 풀고 그 답을 저장하는 방식으로 문제를 푸는 방법이다.
모든 문제들에 적용 가능한 방식은 아니지만 동적 프로그래밍을 적용할 수 있는 문제의 경우엔 코드의 성능에서 큰 이점을 가진다.

## DP 요구조건 1 - 중첩되는 하위 문제가 있어야 한다

- 대표 유형: 피보나치 수열 문제

![피보나치 수열-2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1765d9d5-bd61-4fc9-847a-a8004932a04b/피보나치_수열-2.jpg)

문제 내에서 어떤 방식으로든 **반복되는 하위 문제들**이 있어야 한다.
즉, 하나의 커다란 문제를 더 작은 문제들로 나눌수 있으며 그 나뉜 작은 문제들을 재사용 가능해야 한다.

피보나치 수열은 모든 숫자가 그 앞에 오는 두 개의 숫자의 합과 같은 숫자로 이루어진 수열을 말한다. 이를 트리 구조로 살펴보면 어떠한 숫자를 구하기 위해 이전의 두 숫자와 그 더한 값을 알아야 하며 이 부분이 중복되어 등장하기 때문에 한 문제를 여러 문제들로 나누며 이 **하위 문제들이** 반드시 **반복**되어야 하는 동적 프로그래밍의 요구 조건에 부합한다.

overlapping subproblems : 중첩되는 하위 문제들

### 적용이 불가능한 경우

- 대표 유형: 병합 정렬(merge sort) - 배열을 더 작은 조각으로 나누어서 정렬하고 다시 합침.

하나의 문제를 작은 문제들로 나누는 건 동일하나, 매번 다른 조각들을 정렬하기 때문에 하위 문제들이 중복되어 재사용할 수 있는 경우가 아니므로 (No overlapping subproblems.) DP 적용 불가능. 이런 유형은 분할 정복으로 풀면 된다.

## DP 요구조건 2 - 최적의 부분 구조(optimal substructure)

하위 문제들의 최적 해답으로 문제의 최적 해답을 구할 수 있는 경우를 문제가 optimul substructure를 가진다고 말한다.

![4D771C9C-81E2-4A9B-ACE5-AB64FC946ABC.jpeg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef724182-7da8-42be-ba8e-59e764bd9769/4D771C9C-81E2-4A9B-ACE5-AB64FC946ABC.jpeg)

- 최단 경로 문제
  1. A → B 의 최단 경로를 찾는다. (하위 문제)
  2. A → C 의 최단 경로를 찾는다. (하위 문제)
  3. A → D 의 최단 경로를 찾는다.

그래프의 최단 경로에서 현재 A부터 D까지 가는 최단 경로의 문제 안에 A부터 C까지 가는 최단 경로의 작은 문제가 중첩되어 있다. 이러한 형태를 optimal substructure를 가졌다고 한다. 더 쪼개면 A부터 B까지 가는 최단 경로의 작은 문제도 중첩되어 가지고 있음을 알 수 있다.

시작 지점에서 끝 지점으로 가는 최단 경로에 관한 문제에서는 최단 경로 위에 있는 한 지점에 대해서 시작부터 해당 지점까지가 항상 최단 거리가 된다. 따라서 하위 문제가 중첩된다.

### 최적 경로가 아닌 경우

중간 기착지를 거쳐야 하는 항공편이 있을 때 최단 경로가 아니라 ‘최저가’인 경로를 찾는 경우 같은 때에는 최단 경로와 가장 저렴한 경로가 항상 일치하지는 않는다. 즉 중첩되는 하위 문제가 없고 최적 경로가 없다.

## 2. DP의 재귀방식 솔루션 - 피보나치 수열 예시

### 메모이제이션 미적용 피보나치 수열 의사 코드 - O(2^n)

```jsx
// fib(n) = fib(n - 1) + fib(n - 2)
// base case가 fib(2) = 1,  fib(1) = 1 로 주어진다고 가정.

function fib(n) {
  // 현재 주어진 1번째, 2번째 숫자가 1이라서 주어진 재귀함수의 탈출조건이 아래와 같다.
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2); // 반환문에서 재귀 호출.
}
```

![https://i.stack.imgur.com/kgXDS.png](https://i.stack.imgur.com/kgXDS.png)

상기 이미지와 같이 피보나치 수열의 수가 늘어날 수록 트리 가짓수가 굉장히 늘어나므로 dp 없이 재귀만으로는 상당히 비효율적이다. 시간복잡도는 대략 O(2^n) 이다.

### Memoization: 하향식 접근

메모이제이션이란 일반적으로 배열이나 객체로 데이터를 저장할 구조를 만든 다음 시간이 오래 걸리는 함수를 실행시키고(expensive function calls) 그 값을 배열에 저장해두고 재사용하는 방법을 말한다(returning the cached result when the same inputs occur again). 즉 상위 문제에서 하위 문제가 중첩될 때 이미 푼 하위 문제를 다시 풀지 않고 걸과를 재사용하는 것이다.

### 메모이제이션 적용 피보나치 수열 재귀 코드 - O(N)

```jsx
// * 1. Memoization 방식 피보나치 수열 재귀 코드 - O(N)
// 피보나치 수열의 첫번째, 두번째 숫자가 1인 경우를 가정한다.
// 메모이제이션 할 배열의 인덱스 0에는 값을 담지 않는 예시이다.
// 찾고자 하는 피보나치 숫자가 몇번째인지와 배열에 담아둔 인덱스를 일치시키기 위함.
// 메모이제이션 할 memo 배열에 아래 예제 코드처럼
// 1. 바로 값을 넣어두어도 되고
// 2. 빈 배열로 두어도 되며
// 3. 아예 독립된 변수로 만들어도 된다.

function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  //   if (n <= 2) return 1; -> 필요가 없어짐. memo 배열에 초기값이 있으므로!
  let result = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}
```

### Tabulation: 상향식 접근

반복문을 사용하며, 메모이제이션과 반대로 가장 작은 하위 문제를 푼 결과를 테이블(주로 배열)에 저장하고 반복문을 실행하면서 상향식으로 문제를 접근한다.

```jsx
// * 2. Tabulation 방식 피보나치 수열 코드 - 재귀 x, 반복문 사용.
// 반복문을 사용하며, 메모이제이션과 반대로 가장 작은 하위 문제를 푼 결과를
// 테이블(주로 배열)에 저장하고 반복문을 실행하면서 상향식으로 문제를 접근한다.
// 피보나치 수열의 첫번째, 두번째 숫자가 1로 주어짐을 가정하고 배열에 [x, 1, 1] 로 초기화.
// n번째 피보나치 수열의 숫자를 구한다.
// fib(1), fib(2) 가 이미 1로 주어져 있으므로 i는 3부터 시작.
// 따라서 fib(3)부터 fib(4), fib(5) 즉 상향식으로
// 값을 배열에 fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2]로 저장해 나간다.
function fib(n) {
  if (n <= 2) return 1;
  let fibNumbs = [undefined, 1, 1]; // 인덱스 0번은 사용하지 않는 예제 코드.
  for (let i = 3; i <= n; i++) {
    fibNumbs[i] = fibNumbs[i - 1] + fibNumbs[i - 2];
  }
  return fibNumbs[n];
}
```
