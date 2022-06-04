// * 유클리드 호제법: 두 수의 최대공약수를 구하는 알고리즘.
// 호제법이란 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 알고리즘을 말한다.

// * 유클리드 호제법 구현
// 나머지 = 큰 수 - 작은수
// * 1. 두 수 중 큰 수를 작은 수로 나눈다.
// * 2. 만약 나눈 나머지가 0이라면 작은 수가 두 수의 최대공약수이다.
// * 3. 나머지가 0이 아니라면 작은 수를 다시 나머지로 나눈다.
// * 4. 나머지와 작은 수를 인수로 재귀 호출을 반복하여 1~3을 실행 후,
// * 나머지가 0이 되면 리턴값이 두 수의 최대공약수이다.

function gcd(x, y) {
  const rest = x % y;
  if (rest === 0) return y;
  return gcd(y, rest);
}
