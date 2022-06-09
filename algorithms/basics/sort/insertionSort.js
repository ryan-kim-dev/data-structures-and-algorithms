function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]; // swap하는 3줄짜리 코드보다 보기 좋은 방식
        // 기존 방법대로 아래처럼 swap 해도 동작하나 가독성은 5번 라인의 코드가 더 좋다.
        // const temp = array[j];
        // array[j] = array[j - 1];
        // array[j - 1] = temp;
      } else {
        break; // 정렬이 완료되면 outer for loop를 더이상 반복할 필요 없음
      }
    }
  }
  return array;
}

console.log(insertionSort([1, 5, 7, 3, 11, 66, 43, 22, 69, 90, 87, 72, 30]));
