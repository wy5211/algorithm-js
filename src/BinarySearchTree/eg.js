import BinarySearchTree from './index';

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(9);
bst.insert(3);
bst.insert(7);
bst.insert(18);
bst.insert(110);
bst.insert(1);
bst.insert(15);
bst.insert(17);
bst.insert(4);
bst.insert(6);
bst.insert(13);


let str = '';
bst.preOrderTraversal((key) => {
  str += key + ' '
});

console.log(str, bst.max(), bst.min());

