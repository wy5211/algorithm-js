// 队列优先级封装实现

// 需要两个东西，1.队列的值 2.队列的优先级
export default function PriorityQueue() {
  function DealEnter(val, priority) {
    this.val = val;
    this.priority = priority;
  }

  // 先创建一个队列
  this.items = [];
  PriorityQueue.prototype.enqueue = function (val, priority) {
    var de = new DealEnter(val, priority);

    if (this.items.length === 0) {
      this.items.push(de);
    } else {
      // 需要根据优先级来判断插入的位置
      var added = false;
      for (var i = 0; i < this.items.length; i++) {
        if (de.priority < this.items[i].priority) {
          this.items.splice(i, 0, de);
          added = true;
          break;
        }
      }
      if (!added) {
        // 插入的元素的优先级比队列里的元素的优先级都高
        this.items.push(de);
      }
    }
  };

  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  };

  PriorityQueue.prototype.isEmpty = function () {
    return this.items.len === 0;
  };

  PriorityQueue.prototype.front = function () {
    return this.items[0];
  };

  PriorityQueue.prototype.toString = function () {
    var result = '';
    for (var i = 0; i < this.items.length; i++) {
      result += this.items[i].val + this.items[i].priority + '  ';
    }
    return result;
  };
}
