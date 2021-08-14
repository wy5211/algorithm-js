// import Queue from './index';

// const q = new Queue();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// const f1 = q.dequeue();
// console.log('wy->q', q);
// console.log('wy->f1', f1);
// console.log('wy->q.isEmpty()', q.isEmpty());
// console.log('wy->q.front()', q.front());
// console.log('wy->q.toString()', q.toString());

// // 击鼓传花，最终只剩下一个人
// function passGame(nameList, num) {
//   const queue = new Queue();
//   // 1.先将人员以此加入队列
//   nameList.forEach((item) => {
//     queue.enqueue(item);
//   });

//   while (queue.size() > 1) {
//     // 2.小于num的取出放队列尾部，等于num的人出队列
//     for (let i = 0; i < num - 1; i++) {
//       queue.enqueue(queue.dequeue());
//     }
//     queue.dequeue();
//   }
//   // 3.只剩一个时候返回
//   return queue.front();
// }

// console.log('wy->', passGame(['a', 'b', 'c', 'd'], 3));

import PriorityQueue from './priorityQueue';

const pq = new PriorityQueue();

pq.enqueue('a', 1);
pq.enqueue('b', 1234);
pq.enqueue('c', 3);
pq.enqueue('d', 4353);

const r = pq.toString();

console.log('wy->r', r);
