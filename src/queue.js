const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    this.data = null;
  }

  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    if (this.data === null) {
      this.data = new ListNode(value);
    } else {
      let tmp = this.data;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      let tmpListNode = new ListNode(value);
      tmp.next = tmpListNode;
    }
  }

  dequeue() {
    if (this.data === null) {
      return null;
    } else {
      let tmp = this.data.next;
      let topElement = this.data.value;
      this.data = tmp;
      return topElement;
    }
  }
}

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log('______');
// queue.dequeue();
// queue.dequeue();



module.exports = {
  Queue
};
