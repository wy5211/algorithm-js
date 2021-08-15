import LinkedList from './index';

const link = new LinkedList();

link.append('a');
link.append('b');
link.append('aasdf');

link.insert(0, 'aaa');
link.insert(3, 'bbb');
link.insert(5, 'ccc');

console.log(
  'wy->link.toString()',
  link.toString(),
  link.get(3),
  link.get(5),
  link.get(0)
);
