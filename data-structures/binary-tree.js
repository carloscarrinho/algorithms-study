// TOTAL NODES OF A PERFECT BINARY TREE:
// Level 0: 2^0 - 1 = 0;
// Level 1: 2^1 - 1 = 1;
// Level 2: 2^2 - 1 = 3;
// Level 3: 2^3 - 1 = 7;
// Level n: 2^n - 1 = x;

// log 100 = 2 => 10^2 = 100

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left == null ? null : traverse(node.left);
  tree.right = node.right == null ? null : traverse(node.right);
  return tree;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.length) {
      this.root = newNode;
      this.length++;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          this.length++;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          this.length++;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while(currentNode) {
      if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return currentNode;
      }
    }

    return false;
  }

  remove(value) {
    if (!this.length) return false;

    let targetNode = null;
    let currentNode = this.root;

    while(!targetNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        targetNode = currentNode.right.left.value;
        currentNode.right.left.value = null;
        currentNode.value = targetNode.value;
      }
    }
  }
}

// Program Execution:
const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(17);
tree.insert(25);
tree.insert(15);
tree.insert(23);
tree.insert(6);
tree.insert(3);
tree.insert(12);
tree.insert(2);
tree.insert(30);
tree.insert(1);
console.log("####### FULL TREE ######");
console.log('tree >> ', JSON.stringify(traverse(tree.root)));
console.log("####### NEW TREE ######");
// console.log('tree >> ', JSON.stringify(traverse(tree.root)));

//                   9
//          4                 17(x) -> 23
//      2     6         15         25
//   1     3        12          23(x)    30