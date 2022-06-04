// * 유클리드 호제법: 두 수의 최대공약수를 구하는 알고리즘.
// 호제법이란 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 알고리즘을 말한다.

function gcd(x, y) {
  const rest = x % y;
  if (rest === 0) return y;
  return gcd(y, gcd);
}
