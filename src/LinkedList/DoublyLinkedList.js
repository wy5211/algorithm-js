export default function DoublyLinkedList() {
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  this.head = null;
  this.tail = null;
  this.length = 0;

  // append
  DoublyLinkedList.prototype.append = function (element) {
    var newNode = new Node(element);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  };

  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString();
  };

  DoublyLinkedList.prototype.forwardString = function () {
    var current = this.tail;
    var resultString = '';
    while (current) {
      resultString += current.data + ' ';
      current = current.prev;
    }
    return resultString;
  };

  DoublyLinkedList.prototype.backwardString = function () {
    var current = this.head;
    var resultString = '';
    while (current) {
      resultString += current.data + ' ';
      current = current.next;
    }
    return resultString;
  };
}
