/**
 * 链表需要什么东西?
 * - 开始的节点；
 * - 指向下个节点的指针；
 */

export default function LinkedList() {
  function Node(element, next) {
    this.data = element;
    this.next = null;
  }
  this.head = null;
  this.length = 0;

  // append，添加节点
  LinkedList.prototype.append = function (element) {
    // 1.创建新的节点
    var newNode = new Node(element);

    // 2.新节点加入列表
    if (this.length === 0) {
      // 2.1第一个节点
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 最后节点的next指向新的节点；
      current.next = newNode;
    }
    this.length += 1;
  };

  LinkedList.prototype.toString = function () {
    var current = this.head;
    var listString = '';
    while (current) {
      listString += current.data + '  ';
      current = current.next;
    }
    return listString;
  };

  // insert 指定插入的位置
  LinkedList.prototype.insert = function (position, element) {
    // position 越界判断
    if (position < 0 || position > this.length) {
      return false;
    }
    // 1.先创建新的节点
    var newNode = new Node(element);
    // 2.1 插在第一个位置上
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 2.2 插在其他位置
      var current = this.head;
      var index = 0;
      var previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length += 1;
    return true;
  };

  // get 获取指定位置的元素
  LinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    var current = this.head;
    var index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current;
  };

  // indexOf 返回指定元素的位置，不存在返回 -1
  LinkedList.prototype.indexOf = function (element) {
    var current = this.head;
    var index = 0;
    while (current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  };

  // update 更新指定位置的元素；
  LinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) {
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

  // removeAt 移除指定位置的元素
  LinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    var current = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      var index = 0;
      var previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
    }
    // 返回被删除的元素；
    return current.data;
  };

  // remove 删除指定的元素；
  LinkedList.prototype.remove = function (element) {
    // 先找到元素对应的位置
    var position = this.indexOf(element);

    // 调用removeAt
    return this.removeAt(position);
  };

  // size 返回链表的长度
  LinkedList.prototype.size = function () {
    return this.length;
  };

  // isEmpty 链表是否为空
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  };
}
