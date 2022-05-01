const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor () {
    this.first = null;
    // console.log(this.first);
  }

  root() {
    // console.log(this.first);
    return this.first;
  }

  add(data) {
    this.first = createNode(this.first, data) 

    function createNode(prevNode, data) {
      // console.log('prevNode' + prevNode);
        if (prevNode === null) {
           let newNode = new Node(data);
          //  console.log(newNode);
           return newNode;
        }   
        if (prevNode.data === data) {
          // console.log(prevNode);
          return prevNode;
        }
        if (prevNode.data < data) {
          prevNode.right = createNode(prevNode.right, data);
        } else {
          prevNode.left  = createNode(prevNode.left, data);
        }
        // console.log(prevNode);
        return prevNode;
    }
    
  }

  has(data) {
    return checkNode(this.first, data);

    function checkNode(prevNode, data) {
        if (prevNode === null) return false;
        if (prevNode.data === data) return true;
        if (prevNode.data < data) {
          return checkNode(prevNode.right, data);
        } else {
          return checkNode(prevNode.left, data);
        }
    }
  }

  find(data) {
    return checkNode(this.first, data);

    function checkNode(prevNode, data) {
        if (prevNode === null) return null;
        if (prevNode.data === data) return prevNode;
        if (prevNode.data < data) {
          return checkNode(prevNode.right, data);
        } else {
          return checkNode(prevNode.left, data);
        }
    }
  }

  remove(data) {
    this.first = removeNode(this.first, data);
    
    function removeNode(prevNode, data) {
      if (prevNode === 0) return null;
      if (prevNode.data > data) {
        // console.log(data);
        // console.log(prevNode);
        prevNode.left = removeNode(prevNode.left, data);
        return prevNode;
      } else if (prevNode.data < data) {
        // console.log(prevNode);
        prevNode.right = removeNode(prevNode.right, data);
        return prevNode;
      } else {
        if (prevNode.left === null && prevNode.right ===  null) return null;
        if (prevNode.left === null) {
            prevNode = prevNode.right;
            return prevNode;
        }    
        if (prevNode.right === 0) {
          prevNode = prevNode.left;
          return prevNode;
        }
        let maxLeft = prevNode.left;
        while (maxLeft.right) {
          maxLeft =  maxLeft.right;
        }  
        prevNode.data = maxLeft.data;
        prevNode.left = removeNode(prevNode.left, prevNode.data);
        return prevNode;
      }
}

  }

  min() {
    if (this.first === null) {
      // console.log(this.first);
      return null;
    };
    let prevNode = this.first;
    while (prevNode.left) {
      prevNode = prevNode.left;
    }
    // console.log(prevNode);
    return prevNode.data;
  }

  max() {
    if (this.first === null) {
      // console.log(this.first);
      return null;
    };
    let prevNode = this.first;
    while (prevNode.right) {
      prevNode = prevNode.right;
    }
    // console.log(prevNode);
    return prevNode.data;
  }
}


// const tree = new BinarySearchTree();
// tree.add(12);
// tree.add(5);
// tree.add(4);
// tree.add(9);
// tree.add(3);
// tree.add(6);
// tree.add(8);
// tree.add(10);
// tree.add(7);
// tree.remove(5);
// // tree.remove(8);
// // tree.remove(9);

module.exports = {
  BinarySearchTree
};