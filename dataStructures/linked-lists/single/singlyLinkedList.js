// * 단일 연결 리스트
// * 단일 연결 리스트의 각 노드는 두개의 필드로 구성되어 있다.
// * 1. 데이터 필드 2. 다음 노드의 링크를 담은 필드

// 의사코드
const linkedList = {
  head: {
    value: 15,
    next: {
      value: 3,
      next: {
        value: 94,
        next: {
          value: 50,
          next: null,
        },
      },
    },
  },
};

// 구현 예시
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    let init = new Node('head');
    this.head = init; // 시작 노드
    this.tail = init; // 마지막 노드
    // this.head = null;
    // this.tail = null;
    this.currentNode = undefined; // 현재 노드
    this.dataLength = 0; // 현재 데이터 수
  }
  // length 인스턴스 메서드: 현재 데이터 개수 확인
  length() {
    return this.dataLength;
  }
  // append 인스턴스 메서드: 마지막에 요소 추가
  append(data) {
    let newNode = new Node(data);
    this.tail.next = newNode; // 노드 생성 시 해당 노드가 다음 노드를 가리키도록 함.
    this.tail = newNode;
    this.dataLength += 1;
  }
  showData() {}
}

const list = new SinglyLinkedList();
list.append(1);
list.append(15);
list.append(24);
list.append(7);
list.append(85);
console.log(list.length()); // 5
console.log(list); // SinglyLinkedList {head: Node, tail: Node, currentNode: undefined, countData: 5}
// countData: 5
// currentNode: undefined
// head: Node {data: 'head', next: Node}
// tail: Node {data: 85, next: null}

/**
 SinglyLinkedList {head: Node, tail: Node, currentNode: undefined, countData: 5}
countData: 5
currentNode: undefined

head: Node
data: "head"
next: Node

data: 1
next: Node

data: 15
next: Node

data: 24
next: Node

data: 7
next: Node

data: 85
next: null

tail: Node {data: 85, next: null}
[[Prototype]]: Object
 */
