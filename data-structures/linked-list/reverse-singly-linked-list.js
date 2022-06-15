// Exercise - Reverse a singly linked list

const { LinkedList } = require('./singly-linked-list');

const list = new LinkedList();
list.append(1);
list.append(10);
list.append(16);
list.append(88);
list.printList();

// expected: [ 88, 16, 10, 1 ]
list.reverse();
list.printList();