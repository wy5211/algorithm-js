// import Stack from './Stack';

// console.log('wy->', new Stack());

// // 利用栈十进制转二进制
// function dec2bin(decNum) {
//   const stack = new Stack();
//   while (decNum > 0) {
//     // 将余数压入栈
//     stack.push(decNum % 2);
//     // 将计算后的整数作为下一次运行的数字
//     decNum = Math.floor(decNum / 2);
//   }
//   var result = '';
//   while (!stack.isEmpty()) {
//     result += stack.pop();
//   }
//   return result;
// }

// console.log('wy->', dec2bin(10));
// console.log('wy->', dec2bin(100));
// console.log('wy->', dec2bin(4));

// --------------------------------------------------------------------------

import Queue from './Queue';

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

// 击鼓传花，最终只剩下一个人
function passGame(nameList, num) {
  const queue = new Queue();
  // 1.先将人员以此加入队列
  nameList.forEach((item) => {
    queue.enqueue(item);
  });

  while (queue.size() > 1) {
    // 2.小于num的取出放队列尾部，等于num的人出队列
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  // 3.只剩一个时候返回
  return queue.front();
}

console.log('wy->', passGame(['a', 'b', 'c', 'd'], 3));
