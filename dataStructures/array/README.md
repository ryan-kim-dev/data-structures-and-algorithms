# 배열

- 참고
  - 희소 배열
    - https://www.tcpschool.com/javascript/js_array_application
    - https://www.geeksforgeeks.org/what-is-meant-by-sparse-array/

## 1. 자료구조 관점에서의 배열

- 특정 인덱스에 직접적으로 접근 → 수행 시간 : O(1)
- 인덱스가 존재, (대부분의 언어에서)인덱스는 0부터 시작
- 컴퓨터의 메인 메모리에서 배열의 공간은 연속적으로 할당됨.
- 캐시 히트 가능성이 높으며, 인덱스로 직접 접근하여 상수 시간으로 조회가 빠르다.
- 일반적으로 배열의 크기를 미리 지정해야 하므로 데이터의 추가/삭제에 한계가 있다.
  - 하지만 JS의 배열은 동적 배열의 기능을 가지므로 배열의 크기를 동적으로 수정 가능
- 일반적으로 자료구조 관점에서 말하는 배열은 ‘밀집 배열’을 말한다.

### 밀집 배열(Dense Array)

- 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조
- 배열의 요소는 하나의 데이터 타입으로 통일되며 서로 연속적으로 인접해 있다.

### 희소 배열(Sparse Array)

- 배열에 속한 요소의 위치가 연속적이지 않은 배열
- 배열의 길이보다 요소의 개수가 적다.
- 대부분의 요소가 동일한 값(기본값은 0 또는 null)을 갖는다.
- 희소 배열은 0이 아닌 요소가 더 적을 때 배열보다 사용된다. 희소 배열은 요소를 저장하는 데 더 적은 메모리가 필요하며 계산 시간을 절약할 수 있다.

## 2. 자바스크립트의 배열

### 자바스크립트 배열은 배열이 아니라 일반적인 배열의 동작을 흉내낸 해시 테이블로 구현된 객체이다.

- 자료구조에서 말하는 배열은 요소들이 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있는 밀접 배열이다.
- 자바스크립트의 배열은 요소마다 데이터 타입이 다를 수 있다. 즉 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않을 수 있다. 또한 요소 일부가 비어있는 희소 배열을 문법적으로 허용한다.

### 배열 요소의 참조

- 대괄호 표기법으로 배열의 요소를 참조할 수 있다. 대괄호 안에는 인덱스가 와야 한다.
- 0 이상의 정수 또는 정수 형태의 문자열, 또는 정수로 평가되는 표현식을 배열의 인덱스로 사용해야 한다. 그 외의 값을 인덱스로 사용하면 배열의 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.
- JS의 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로, 배열의 요소를 프로퍼티 값으로 갖는 키-값 쌍 형태의 객체이다.
- JS의 배열은 객체이므로 존재하지 않는 요소를 참조하면 객체의 없는 프로퍼티에 접근했을 때와 동일하게 `undefined` 를 반환한다.

### 유사 배열 객체

- 유사 배열 객체 : 배열처럼 인덱스로 프로퍼티 값에 접근 가능하며, `length` 프로퍼티를 갖는 객체
