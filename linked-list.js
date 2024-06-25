class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        // this.tail = 400;   must not have tail pointer
    }

    addToHead(val) {
        const newNode = new LinkedListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // this.next = this.value;
        // this.head = new LinkedListNode(val);
    }

    addToTail(val) {
        const newNode = new LinkedListNode(val);
        if(!this.head) {  // if linked list is empty, add first node as head
            this.head = newNode;
        } else {          // if not empty, traverse list until reaching the end
            let current = this.head;
            while(current.next) {  // if current.next is truthy there is another node
                current = current.next;   // let the next node be set to "current" and evaluated
            }   // when last node is reached line 33 executes, setting next attribute to the new node as tail
            current.next = newNode;
        }
        this.length++;
    }

    // You can use this function to help debug
    print() {
        let current = this.head;

        while (current) {
          process.stdout.write(`${current.value} -> `);
          current = current.next;
        }

        console.log("NULL");
    }
}

// local testing

let linkedList = new LinkedList();

linkedList.addToHead(1);
linkedList.addToHead(2);
linkedList.addToHead(3);

console.log(linkedList.head.value);  // 3
console.log(linkedList.head.next.value) // 2  
console.log(linkedList.head.next.next.value) // 1  

module.exports = LinkedList;
