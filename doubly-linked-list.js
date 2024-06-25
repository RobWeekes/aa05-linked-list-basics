class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedListNode(val);
        
        if(this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head; // old head
            this.head = newNode;
        } else {    // if no nodes the newNode is first, easy
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    addToTail(val) {
        const newNode = new DoublyLinkedListNode(val);

        if(this.length >= 1) {  // if we have nodes already
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {  // if no nodes, adding is easy
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        // make current tail point to new node
        // make new node previous point to the last tail
        // make linked list point tail attribute to new node
    }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

// local testing

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.addToHead(1);
doublyLinkedList.addToHead(2);
doublyLinkedList.addToHead(3);

console.log(doublyLinkedList.head.value) // 3
console.log(doublyLinkedList.tail.value) // 1

module.exports = DoublyLinkedList;
