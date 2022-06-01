function sumOfAll(num) {
  if (num === 1) return 1;
  return num + sumOfAll(num - 1);
}
sumOfAll(3); // 6

// * 값의 변화
/**
 * sumOfAll(3)
 *      return 3 + sumOfAll(2)
 *                  return 2 + sumOfAll(1)
 *                                  return 1
 */
