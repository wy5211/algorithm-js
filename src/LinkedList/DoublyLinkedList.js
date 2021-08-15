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
}
