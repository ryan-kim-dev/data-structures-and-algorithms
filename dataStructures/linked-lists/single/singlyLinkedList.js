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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 처음엔 다음 노드가 없기 때문에 null로 초기화
  }
}
// * 연결 리스트는 head와 tail에 대한 포인터를 가지고 있다.
// * 따라서 연결 리스트를 정의한 클래스의 constructor는 head, tail, 데이터갯수 3가지 프로퍼티는 반드시 가져야 함.
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.dataLength = 0;
  }
  // * 1. 주어진 값을 받아 새로운 노드를 생성하는 push 메서드 만들기
  // * head는 처음 노드가 새로 생성될 때 해당 노드를 가리킨 상태로 고정, tail은 새 노드 추가시마다 해당 노드로 변경.
  // * 엣지케이스: head가 없다면 (리스트가 비어 있다면) head와 tail 모두 새로운 노드를 가리켜야 한다.
  // * head가 있다면 마지막 노드의 next를 새로 생성된 노드를 가리키도록 하고 tail은 새로 생성된 노드를 가리켜야 한다.
  // * length를 1 증가 시킨다
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.head) {
      this.tail.next = newNode; // 현재 tail의 next가 새 노드
      this.tail = newNode; // 새로운 tail은 새 노드
    }
    this.dataLength++;
    return this; // 리턴값은 있어야 한다.
  }
  // * 2. 노드 전체를 순회하는 traverse 메서드 만들기 (순회할수 있어야 pop 할수 있음.)
  // *
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  // * 3. 마지막 노드를 삭제하는 pop 메서드 만들기
  // * 엣지케이스: 리스트가 비어있으면 return undefined(this.head === null 이던가 길이가 0 이던가)
  // * tail 까지 순회. temp 변수가 현재 tail인 노드가 됨.
  // * 마지막 직전 노드(pre 변수)의 next 값을 null로 변경.
  // * tail은 pre가 됨(마지막 직전 노드)
  // * 길이 - 1
  // * 방금 제거한 노드의 value를 반환. (변수에 제거된 노드를 담아둬야 함.)
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // 마지막 노드까지 순회하는 조건 - next값이 null일 때까지
      newTail = current; // 항상 마지막 이전이 newTail이 됨.
      current = current.next;
    }
    this.tail = newTail; // tail 포인터를 마지막 직전 노드를 가리키게 이동.
    this.tail.next = null; // pop 할 마지막 노드와의 링크를 끊는다.
    this.dataLength--; // 현재 데이터 수를 -1
    return current; // 제거된 노드 반환
  }
}

const list = new SinglyLinkedList();

list.push('머리');
// SinglyLinkedList {head: Node, tail: Node, dataLength: 1}
list.push('가슴');
// SinglyLinkedList {head: Node, tail: Node, dataLength: 2}
list.push('배');
// SinglyLinkedList {head: Node, tail: Node, dataLength: 3}
list.head;
// Node {value: '머리', next: Node}
list.head.next;
// Node {value: '가슴', next: Node}
list.head.next.next;
// Node {value: '배', next: null}
list.tail;
// Node {value: '배', next: null}
list.head;
// Node {value: '머리', next: Node}
list.traverse();
// 머리
// 가슴
// 배
