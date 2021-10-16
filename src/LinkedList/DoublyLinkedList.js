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

  DoublyLinkedList.prototype.insert = function (position, data) {
    // 1.越界判断
    if (position < 0 || position > this.length) {
      return false;
    }
    var newNode = new Node(data);
    // 2.链表是否为空
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position === 0) {
        // 2.1是否在位置 0 插入
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        // 2.2是否在末尾 插入
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        // 2.3中间插入
        var current = this.head;
        var index = 0;
        while (index++ < position) {
          current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
    this.length += 1;
    return true;
  };
}
