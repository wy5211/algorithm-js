import Queue from './index';

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
