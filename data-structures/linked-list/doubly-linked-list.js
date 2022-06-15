// Doubly Linked List

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  prepend(value) {
    const node = { value, previous: null, next: null }; 
    
    if(!this.length) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return this;
    }

    // 7 -> 3 -> 5
    node.next = this.head;

    // 7 <- 3 <- 5
    this.head.previous = node;

    // 7 3  5
    this.head = node;
    this.length++;
    return this;
  }

  append(value) {
    if(!this.length) return this.prepend(value);

    const node = { value, previous: null, next: null };

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  insert(position, value) {
    if(parseInt(position) < 0) return;
    if(!this.length) return this.prepend(value);

    const node = { value, previous: null, next: null };

    let currentNode = this.head;

    for(let i = 0; i < this.length; i++) {
      if(i !== parseInt(position)) {
        currentNode = currentNode.next;
        continue;
      }

      // 7 -> 4 <- 5 -> 1 -> 9

      node.next = currentNode;
      node.previous = currentNode.previous;
      currentNode.previous.next = node;
      currentNode.previous = node
      
      currentNode = node;
      this.length++;
      return this;
    }

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

  remove(index) {
    if(!this.length || index < 0) return;

    let current = this.head;

    for(let i = 0; i < this.length; i++) {
      if (i !== index) {
        current = current.next;
        continue;
      }

      current.previous.next = current.next;
      current.next.previous = current.previous;
      current = current.next;

      this.length--;
      return this;
    }
  }
}

// final expected: 7 -> 3 -> 4 -> 5 -> 11;
const list = new DoublyLinkedList();

// expected: [ 7, 3, 5 ]
list.prepend(5);
list.prepend(3);
list.prepend(7);
list.printList()

// expected: [ 7, 3, 5, 11 ]
list.append(11);
list.printList()

// expected: [ 7, 3, 4, 5, 11 ]
list.insert(2, 4);
list.printList();

// expected: [ 7, 4, 5, 11 ]
list.remove(1);
list.printList();