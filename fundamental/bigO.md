# Big O

## 1. Big O Notation(빅오 표기법)

- 빅오 표기법은 CPU(소요 시간)사용량을 대상으로 알고리즘의 효율성을 표기하는 방법이다.
- 알고리즘이 동작하기 위해 ==필요한 연산 횟수==를 나타낸다.
- 빅오 표기법은 최악의 시나리오를 가정한 것이다. 최선(오메가)이나 평균(세타)의 경우는 빅오로 표현할 수 없다.
-
- **시간 복잡도** : 알고리즘에 사용되는 **연산 횟수**를 측정한다.
  - 얼마나 빠르게 연산하는지
- **공간 복잡도** : 알고리즘에 사용되는 **메모리의 양**을 측정한다.
  - 얼마나 메모리를 적게 사용하여 연산하는지
    - 일반적으로는 시간 복잡도를 공간 복잡도보다 더 중요하게 고려함.
      공간을 많이 사용하는 대신 시간을 단축하는 방법이 흔히 사용됨)
- 코딩 테스트에서 메모리의 크기 단위는 일반적으로 MB 단위로 표기
- 일반적으로 ==연산 횟수가 10억을 넘어가면 1초 이상의 시간이 소요==됨

  - 현실 세계에서는 동작 시간이 ==1초 이내==인 알고리즘을 설계할 필요가 있다.
  - 예시) n이 1,000일 경우
    - O(n) : 약 1,000번의 연산
    - O(nLogn) : 약 10,000번의 연산
    - O(n²) : 약 1,000,000(100만)번의 연산
    - O(n³) : 약 1,000,000,000(10억)번의 연산

## 2. 점근적 표기법(Asymptotic Notation)

[참고](http://www.ktword.co.kr/test/view/view.php?no=6212)

- **Big-Ω(Omega)** 빅-오메가 표기법 : Lower Bound
  [참고](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-omega-notation)

  - Omega (Ω)는 알고리즘의 최선의 시나리오를 뜻한다.
  - 알고리즘이 최상의 상황에서 얼마나 빠르게 실행될 수 있는지를 말한다.
  - 즉, 알고리즘을 수행하는 데 최소한 얼만큼의 시간이나 공간이 필요한가를 표현한다.

- **Big-Θ(Theta)** 빅-세타 표기법 : Tight Bound
  [참고](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

  - 세타는 시간 복잡도 측면에서 일반적으로 예상되는 알고리즘의 평균 시나리오를 뜻한다.
  - 최선의 시나리오보다 나쁘지만 최악의 시나리오보다는 낫다.

- **Big O (O)** 빅-오 표기법 : Upper Bound (Worst Case)

  - Big O (O)는 알고리즘의 최악의 시나리오를 뜻한다.
  - 알고리즘이 최악의 상황에서 얼마나 느리게 실행될 수 있는지를 말한다.
  - 엄밀히 이야기하자면, 최상이나 평균의 BigO 케이스는 존재하지 않는다. 따라서 우리가 BigO 표기법으로 효율성을 측정하는 것은 항상 최악의 경우를 측정하는 것이다.

## 3. 많이 사용되는 빅오 실행 시간의 예시

![alt text](image.png)

- 시간복잡도 연산 크기 순서
  `O(1) < O(log n) < O(n) < O(n logn) < O(n2) < O(n3) < O(2n) < O(n!) < O(∞)`

### O(1)

- 상수 시간(Constant Time)
- 입력값이 아무리 커도 연산 횟수가 일정한 알고리즘
- 예시: 배열의 인덱스로 배열의 요소에 접근하는 경우

### O(log n)

- 로그 시간(Logarithmic Time)
- 알고리즘의 실행 시간이 데이터의 크기(n)와 이 데이터 크기의 로그 값(log n)의 곱에 비례하여 증가
- 매 단계(step)마다 데이터를 분할한다.(divide and conquer)
- 예시: 이진 탐색

### O(n)

```js
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

logItems(10); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

- 선형 시간(Linear Time)
- 입력값(n)에 비례하여 연산 횟수가 **선형적으로** 증가하는 알고리즘(Directly proportional to the data set size)
- 예시: 배열을 순회할 때(배열의 모든 요소를 한 번씩 확인하는 경우)

### O(n log n)

- 선형 로그 시간(Linear Logarithmic Time)
- 입력값이 커질수록 연산 횟수가 로그함수의 그래프처럼 증가하는 알고리즘
- 입력값(데이터)를 분할하고, 정렬하거나 검색할 때
- 예시: 병합 정렬, 퀵 정렬

### O(n²)

- 다항식 시간(Polynomial Time)
- n의 거듭제곱에 비례하여 중첩 반복문이 실행되는 알고리즘
- 예시: 버블 정렬
