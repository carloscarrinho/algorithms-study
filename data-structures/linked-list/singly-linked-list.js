// Singly Linked List
// The main hack to understand Linked List is to have a deep understanding of  "pointers"

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  prepend(value) {
    const newNode = { value, next: null };

    if(!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  append(value) {
    const newNode = { value, next: null };

    if(!this.length) {
      this.prepend(value);
      return;
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = { value, next: null };

    if (!this.head) {
      this.prepend(value);
      return this;
    }

    if (index >= this.length) {
      this.append(value);
      return this;
    }
    
    // 0     1     2     3      4
    // 7 --> 4 --> 1 --> 13 --> 22

    let previousNode = null;
    let currentNode = this.head;
    for(let i = 0; i < this.length; i++) {
      if(i === parseInt(index)) {
        newNode.next = currentNode;
        currentNode = newNode;
        previousNode.next = currentNode;
        this.length++;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  remove (index) {
    if(parseInt(index) >= this.length) return;

    let previousNode = null;
    let currentNode = this.head;

    for(let i = 0; i < this.length; i++) {
      if (i !== parseInt(index)) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        continue;
      }
      
      if(i !== 0) previousNode.next = currentNode.next;
      currentNode = currentNode.next;
      this.length--;
      return;
    }

    return this;
  }

  printList() {
    let list = [];

    let current = this.head;
    for(let i = 0; i < this.length; i++) {
      list.push(current.value);
      current = current.next;
    }

    console.log(list);
  }

  reverse() {
    if(this.length < 2) return this;

    let previous = null;
    let current = this.head;
    this.tail = current;
    
    // FIRST WAY - UNECESSARY IF STATEMENT TO MOUNT NEW THIS.HEAD;
    // for(let i = 0; i < this.length; i++) {
    //   if(i === this.length - 1) this.head = current;
      
    //   let nextNode = current.next;
    //   current.next = previous;
    //   previous = current;
    //   current = nextNode;
    // }

    // SECOND WAY - BETTER MEMORY MANAGEMENT
    while(current) {
      let nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }

    this.head = previous;
  }
}

// const list = new LinkedList();

// list.prepend(4);
// list.prepend(7);
// list.append(13);
// list.append(22);
// console.log('list #1 >> ', JSON.stringify(list));
// 7 -> 4 -> 13 -> 22 -> null

// list.insert(2, 1);
// 7 -> 4 -> 1 -> 13 -> 22 -> null
// console.log('list #2 >> ', JSON.stringify(list));

// list.remove(3);
// console.log('list #3 >> ', JSON.stringify(list));
// 7 -> 4 -> 1 -> 22 -> null

module.exports = { LinkedList }