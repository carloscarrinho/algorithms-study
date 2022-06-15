class Item {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = {
            value: null,
            next: null,
        };
        this.last = {
            value: null,
            next: null,
        };
        this.length = 0;
    }

    peek() {}

    enqueue(value) {
        const item = new Item(value);
        if (!this.length) {
            // observe that this.first and this.last points to the same 
            // location on memory, thus, changing this.last, we chage this.first too.
            this.first = item;
            this.last = item;
        } else {
            this.last.next = item;
            this.last = item;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if(!this.length) return this;

        if(this.length == 1) {
            this.first = null;
            this.last = null;
        } else {

            
        }


        this.length--;
        return this;
    }
}

let firstQueue = new Queue();

firstQueue.enqueue('prodest');
firstQueue.enqueue('pluris');
firstQueue.enqueue('arcelor');
firstQueue.enqueue('hibrido');
// firstQueue.enqueue('vizir');

console.log('firstQueue >> ', firstQueue);


// first: Cadu -> next: Emili -> next: Cida
