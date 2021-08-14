/**
 * 链表需要什么东西?
 * - 开始的节点；
 * - 指向下个节点的指针；
 */

function LinkedList() {
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
}
