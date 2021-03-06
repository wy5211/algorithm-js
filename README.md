# 数据结构与算法

## 1.什么是数据结构？

1. 如何高效组织和存放我们的数据，并且可以快速找到某个数据；
2. 比如：图书里面有很多书，如何保证图书馆可以存放大量的书并且可以快速的找到某一本书；

## 2.常见的数据结构？

- 数组 Array、栈 Stack、队列 Queue、链表 Linked List、图 Graph、散列表 Hash、树 Tree、堆 Heap；

## 3.什么是算法(Algorithm)？

- 解决问题的步骤和逻辑；

## 数组

- 线性结构，可以在任意位置插入和删除元素；栈和堆是受限的线性结构；
- 优点：通过索引查找非常快；
- 缺点：插入和删除性能比较低，被插入或者删除元素后方所有的元素都需要向前移位；

## 栈

- 后进先出，只能在一端插入或删除；
- 递归会不断的压栈，所以要有结束条件；

### 栈常见的操作

- push()：压栈
- pop()： 移除栈顶元素，同时返回被移除的元素；
- peek()：返回栈顶元素，不对栈做任何操作；
- isEmpty()：栈里没有元素返回 true；
- size()：返回栈里元素个数；
- toString()：栈结构内容以 string 返回

## 队列

- 先进先出

## 队列常见的操作

- enqueue(): 入队，将元素加入到队列中；
- dequeue(): 出队，从队列中删除队头元素，返回删除的那个元素；
- isEmpty(): 查看队列是否为空；
- front(): 查看队列的队头元素；
- size(): 查看队列的长度；
- toString(): 将队列中的元素以字符串形式返回；

## 链表

- 必须有一个开始的元素；
- 每个节点包含节点的值以及指向下个节点的指针；

### 链表常见的操作

- append(element): 向列表尾部添加一个新的元素；
- insert(position, element): 向列表特定位置添加一个元素；
- get(position): 获取制定位置的元素；
- indexOf(element): 返回元素在列表中的索引；如果没有返回-1；
- update(position, element): 修改某个位置的元素；
- removeAt(position): 从列表特定位置移除一项；
- remove(element): 从列表中移除一项；
- isEmpty(): 列表是否为空；
- size(): 返回列表元素个数；
- toString(): 由于列表使用了 Node 类，重写 toString 让其只输出元素的值；

## 双向链表

- 每个节点包含三部分，节点的值、上个节点的引用、下个节点的引用；
- head 头部元素；tail 尾部元素；

### 双向链表常见操作

- append(element): 向列表尾部添加一个新的元素；
- insert(position, element): 向列表特定位置添加一个元素；
- get(position): 获取制定位置的元素；
- indexOf(element): 返回元素在列表中的索引；如果没有返回-1；
- update(position, element): 修改某个位置的元素；
- removeAt(position): 从列表特定位置移除一项；
- remove(element): 从列表中移除一项；
- isEmpty(): 列表是否为空；
- size(): 返回列表元素个数；
- toString(): 由于列表使用了 Node 类，重写 toString 让其只输出元素的值；
- forwardString(): 返回正向遍历节点字符串形式
- backwardString(): 返回反向遍历节点字符串形式；
