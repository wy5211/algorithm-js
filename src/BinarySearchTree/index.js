// 二叉搜索树

function BinarySearchTree() {
  function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  // 插入节点
  BinarySearchTree.prototype.insert = function (key) {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      // 递归
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 向右查找
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };
}
