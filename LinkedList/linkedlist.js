// we need 2 classes

// 1) Linkedlist - linkedlist main class
// 2) node - linkedlist node

class Node {
  /**
   * Node will have 2 properties
   *
   * 1. Node value
   * 2. link to next node, null if this is last node.
   *
   */
  constructor(nodeValue) {
    this.value = nodeValue;
    this.next = null;
  }
}

/**
 *
 * Functionalities
 *
 * 1) Get size of current linkedlist
 * 2) insert new node
 * 3) delete node
 * 4) update node value
 * 5) update node links
 * 6) create new node (prepend, append)
 * 7) check if node is empty
 *
 */
class LinkedList {
  /**
   * On initial call new node will be created with value, which will be head node and next will link to null
   *
   */
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    this.getSize == 0;
  }

  getSize() {
    return this.size;
  }

  prependNode(nodeValue) {
    if (this.head) {
      let temp = this.head;
      this.head = new Node(nodeValue);
      this.head.next = temp;
    } else {
      this.head = new Node(nodeValue);
    }
    this.size++;
  }

  appendNode(nodeValue) {
    let node = new Node(nodeValue);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertNode(pos, value) {
    if (this.isEmpty() || this.size < pos) {
      console.log("List error, list size", this.size());
      return;
    }

    const newnode = new Node(value);

    if (pos <= 1) {
      let temp = this.head;
      this.head = newnode;
      this.head.next = temp;
      return;
    }

    let curr = this.head;
    for (let i = 1; i < pos - 1; i++) {
      curr = curr.next;
    }
    let temp = curr.next;
    curr.next = newnode;
    curr.next.next = temp;
  }

  removeNode(pos) {
    if (pos - 1 > this.size) {
      console.log("Invalid position");
      return;
    }

    if (pos == 1) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;

    for (let i = 1; i < pos - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr?.next?.next;
  }

  getLinkedList() {
    if (this.isEmpty()) {
      console.log("LinkedList empty");
      return;
    }

    let curr = this.head;
    let linkedlistvalue = "";

    while (curr) {
      linkedlistvalue += `${curr.value} `;
      curr = curr.next;
    }
    console.log("LinkedList:", linkedlistvalue);
  }

  getNodeVlaueAtPosition(pos) {
    if (pos - 1 > this.size || pos - 1 < 0) {
      console.log("Invalid position");
      return;
    }

    let curr = this.head;
    for (let i = 0; i < pos - 1; i++) {
      curr = curr.next;
    }

    console.log(`NodeValue at position ${pos} is ${curr.value || null}`);
    return;
  }
}

const ll = new LinkedList();

ll.prependNode("two");
ll.prependNode("one");
console.log("size", ll.getSize());
ll.appendNode("three");
ll.getLinkedList();
ll.insertNode(3, "new");
ll.getLinkedList();
ll.removeNode(4);
ll.getLinkedList();
ll.getNodeVlaueAtPosition(0);
