import LinkedList from './index';
import DoublyLinkedList from './DoublyLinkedList';

// const link = new LinkedList();
const link = new DoublyLinkedList();

link.append('a');
link.append('b');
link.append('c');

link.insert(0, 'aaa');
link.insert(3, 'bbb');
link.insert(5, 'ccc');

console.log(
  'wy->link.toString()',
  link.toString()
  // link.get(3),
  // link.get(5),
  // link.get(0)
);

// console.log(
//   'wy->link.indexOf',
//   link.indexOf('aaa'),
//   link.indexOf('bbb'),
//   link.indexOf('ccc'),
//   link.indexOf('fff')
// );

// console.log(
//   'wy->link.removeAt',
//   link.removeAt(0, 'mmm'),
//   link.update(3, 'nnn'),
//   link.update(5, 'ddd'),
//   link.toString()
// );

// console.log(
//   'wy->link.update',
//   link.removeAt(0),
//   link.removeAt(3),
//   link.toString()
// );
