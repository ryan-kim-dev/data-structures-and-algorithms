// * 순수 재귀

function collectEvenNums(arr) {
  // * newArr은 반복 할 때마다 빈 배열로 초기화된다.
  // * 하지만 arr이 재귀 호출시마다 slice된다.
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 === 0) {
    newArr.push(arr[0]);
  }
  // * 새 배열을 재할당하면서 concat 메서드 안에서 재귀 호출이 일어난다.
  newArr = newArr.concat(collectEvenNums(arr.slice(1)));
  return newArr;
}

const arrInGlobal = [1, 2, 3, 4, 5, 6];

collectEvenNums(arrInGlobal); // [2, 4, 6]

/**
 * [].concat(collectEvenNums([2,3,4,5,6]))
 *              [2].concat(collectEvenNums([3,4,5,6]))
 *                           [].concat(collectEvenNums([4,5,6]))
 *                                      [4].concat(collectEvenNums([5,6]))
 *                                                  [].concat(collectEvenNums([6]))
 *                                                              [6]
 */
