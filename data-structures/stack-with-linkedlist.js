class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = {
            value: null,
            next: null,
        };
        this.bottom = null;
        this.length = 0;
    }

    peek() {}

    push(value) {
        const node = new Node(value);
        if (!this.length) {
            this.top = node;
            this.bottom = node;
        } else {
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }

        this.length++
        return this;
    }

    pop() {
        if(!this.length) return this;
        
        if(this.length == 1) {
            this.top = null;
            this.bottom = null;

        } else {
            this.top = this.top.next;
        }
        
        this.length--;
        return this;
    }
}

let firstStack = new Stack();

console.log('firstStack >> ', firstStack);

firstStack.push('google.com');
firstStack.push('discord.com');
console.log('firstStack >> ', firstStack);

firstStack.push('f1.com');
console.log('firstStack >> ', firstStack);

firstStack.pop(); // removes f1.com
firstStack.pop(); // removes discord.com
console.log('firstStack >> ', firstStack);

firstStack.pop(); // removes the bottom
console.log('firstStack >> ', firstStack);