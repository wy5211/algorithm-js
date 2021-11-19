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

  DoublyLinkedList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position > this.length) {
      return null;
    }
    // 2.获取元素
    var half = this.length / 2;

    if (half > position) {
      // 接近头部，从头找
      var current = this.head;
      var index = 0;
      while (index++ < position) {
        current = current.next;
      }
      return current.data;
    } else {
      // 接近尾部，从尾部开始找
      var current = this.tail;
      var index = this.length - 1;
      while (index-- > position) {
        current = current.prev;
      }
      return current.data;
    }
  };

  DoublyLinkedList.prototype.indexOf = function (data) {
    var current = this.head;
    var index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  };

  DoublyLinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position > this.length) {
      return false;
    }
    var current = this.head;
    var index = 0;
    while (index++ < position) {
      current = current.next;
    }
    current.data = newData;
    return true;
  };

  DoublyLinkedList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) {
      return null;
    }

    var current = this.head;

    // 2.判断是否只有一个节点
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        // 3.1 删除第一个
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        // 3.2 删除最后一个
        current = this.tail;
        this.tail.next = null;
        this.tail = this.tail.prev;
      } else {
        // 3.3 删除中间的
        var index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }

      this.length -= 1;
      return current.data;
    }
  };

  DoublyLinkedList.prototype.remove = function (data) {
    return this.length === 0;
  };

  DoublyLinkedList.prototype.size = function () {
    return this.length;
  };
}
