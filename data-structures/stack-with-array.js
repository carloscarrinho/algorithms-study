class Stack {
    constructor() {
        this.items = [];
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    push(value) {
        this.items.push(value);
        return this;
    }

    pop() {
        if(!this.items.length) return this;
        this.items.pop();        
        return this;
    }
}

let firstStack = new Stack();

console.log('firstStack >> ', firstStack);

firstStack.push('google.com');
firstStack.push('discord.com');
console.log('firstStack >> ', firstStack);

firstStack.push('f1.com');
console.log('firstStack.peek() >> ', firstStack.peek());

firstStack.pop(); // removes f1.com
firstStack.pop(); // removes discord.com
console.log('firstStack >> ', firstStack);

firstStack.pop(); // removes the bottom
console.log('firstStack >> ', firstStack);
