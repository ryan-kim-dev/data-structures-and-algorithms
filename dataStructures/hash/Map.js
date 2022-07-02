// * 자바스크립트 내장 객체 Map 사용법
// 개발자의 품격 님의 유튜브 강의 내용을 정리한 코드입니다.
// 영상 링크: https://www.youtube.com/watch?v=6DLLaHJi6Ks

// 일반 객체를 사용한 경우
let user = {};
user.name = 'Ryan';
user.age = '10';
user.number = '01012345678';

console.log(user);
/*
{name: 'Ryan', age: '10', number: '01012345678'}
    age: "10"
    name: "Ryan"
    number: "01012345678"
[[Prototype]]: Object
*/

// Map 객체 사용
let userMap = new Map();

// 1. set: key값과 value 값 지정.
userMap.set('name', 'Ryan');
userMap.set('age', '10');
userMap.set('number', '01012345678');

console.log(userMap);
/*
Map(3) {'name' => 'Ryan', 'age' => '10', 'number' => '01012345678'}
[[Entries]]
    0: {"name" => "Ryan"}
        key: "name"
        value: "Ryan"
    1: {"age" => "10"}
        key: "age"
        value: "10"
    2: {"number" => "01012345678"}
        key: "number"
        value: "01012345678"
size: 3
[[Prototype]]: Map
*/

// 2. get: 인수로 넣은 key에 해당하는 value 값을 반환.
userMap.get('name'); // 'Ryan'

// 3. has : Map 객체에 지정된 요소가 있는지 여부를 boolean 값으로 반환.
// 기존 방식
let guestArr = [
  { number: 1, city: 'Seoul' },
  { number: 2, city: 'Suwon' },
  { number: 3, city: 'Daegu' },
  { number: 4, city: 'Busan' },
  { number: 5, city: 'Seoul' },
];

let oGuest = {};
guestArr.forEach(item => {
  if (!oGuest[item.city]) {
    // oGuest 객체에 해당 city가 없으면
    // 동적 프로퍼티 생성 - 객체를 가진 배열을 프로퍼티로
    oGuest[item.city] = [];
  }
  oGuest[item.city].push(item); // city가 있으면 해당 도시의 프로퍼티에 추가
});
console.log(oGuest);

// Map 방식 - has 메서드 사용
let mapGuest = new Map();
guestArr.forEach(item => {
  if (!mapGuest.has(item.city)) {
    mapGuest.set(item.city, []);
  }
  mapGuest.get(item.city).push(item);
});
console.log(mapGuest);

/*
1. 일반 객체: console.log(oGuest);
{
    Seoul: [ { number: 1, city: 'Seoul' }, { number: 5, city: 'Seoul' } ],
    Suwon: [ { number: 2, city: 'Suwon' } ],
    Daegu: [ { number: 3, city: 'Daegu' } ],
    Busan: [ { number: 4, city: 'Busan' } ]
  }

2. Map 객체: console.log(mapGuest);
  Map(4) {
    'Seoul' => [ { number: 1, city: 'Seoul' }, { number: 5, city: 'Seoul' } ],
    'Suwon' => [ { number: 2, city: 'Suwon' } ],
    'Daegu' => [ { number: 3, city: 'Daegu' } ],
    'Busan' => [ { number: 4, city: 'Busan' } ]
  }
*/
