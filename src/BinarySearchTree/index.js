// 二叉搜索树

export default function BinarySearchTree() {
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

  // 先序遍历，先根，再左，再右
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    // 递归调用
    this.preOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 1.处理经过的节点
      handler(node.key);
      // 2.查找经过节点的左子节点
      this.preOrderTraversalNode(node.left, handler);
      // 3.查找经过节点的右子节点
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  // 中序遍历，先左，再中，再右
  BinarySearchTree.prototype.middleOrderTraversal = function (handler) {
    // 递归调用
    this.middleOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.middleOrderTraversalNode = function (
    node,
    handler
  ) {
    if (node !== null) {
      // 2.查找经过节点的左子节点
      this.middleOrderTraversalNode(node.left, handler);

      // 1.处理经过的节点
      handler(node.key);

      // 3.查找经过节点的右子节点
      this.middleOrderTraversalNode(node.right, handler);
    }
  };

  // 后序遍历，先左，再右，再中
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    // 递归调用
    this.postOrderTraversalNode(this.root, handler);
  };

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 2.查找经过节点的左子节点
      this.postOrderTraversalNode(node.left, handler);

      // 3.查找经过节点的右子节点
      this.postOrderTraversalNode(node.right, handler);

      // 1.处理经过的节点
      handler(node.key);
    }
  };

  // 最值
  BinarySearchTree.prototype.max = function () {
    var node = this.root;
    var key = null;

    while (node !== null) {
      key = node.key;
      node = node.right;
    }

    return key;
  };

  BinarySearchTree.prototype.min = function () {
    var node = this.root;
    var key = null;
    while (node !== null) {
      key = node.key;
      node = node.left;
    }

    return key;
  };

  // 搜索某一个节点
  BinarySearchTree.prototype.search = function (key) {
    var node = this.root;

    while (node !== null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  };

  // 删除节点
  BinarySearchTree.prototype.remove = function (key) {
    // 1.定义一些变量
    var current = this.root;
    var parent = null;
    var isLeft = true;

    // 2.查找要删除的节点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeft = true;
        current = current.left;
      } else {
        isLeft = false;
        current = current.right;
      }

      if (current === null) {
        return false;
      }
    }

    // 3.拿到了要删除的key，根据情况删除
    // 3.1要删除的节点为叶子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        // 只有一个根节点
        this.root = null;
        return;
      }
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      return;
    }

    // 3.2只有一个叶子节点
    if (current.left === null) {
      // 只有右子节点
      if (current === this.root) {
        this.root = current.right;
        return;
      }
      if (isLeft) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
      return;
    }
    if (current.right === null) {
      // 只有左子节点
      if (current === this.root) {
        this.root = current.left;
        return;
      }
      if (isLeft) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      return;
    }

    // 3.3有两个以上叶子节点
    // （1）找到后续节点
    let successor = this.getSuccessor(currentNode);

    // （2）判断是否为根节点
    if (currentNode === this.root) {
      this.root = successor;
    } else if (isLeftChild) {
      parentNode.left = successor;
    } else {
      parentNode.right = successor;
    }

    // （3）将后续的左节点改为被删除的左节点
    successor.left = currentNode.left;
  };

  // 获取后续节点，即从要删除的节点的右边开始查找最小的值
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 定义变量，保存要找到的后续
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    // 循环查找 current 的右子树节点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 判断寻找到的后续节点是否直接就是要删除节点的 right
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  };
}
