function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.compare = compare;
  }
  /**
   * @param {number} val 
   */
  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this.insertNode(this.root, val);
    }
  }
  /**
   * @param {number} val
   */
  insertNode(node, val) {
    if (this.compare(val, node.val) === - 1) {
      if (node.left === null) {
        node.left = new Node(val);
      } else {
        this.insertNode(node.left, val);
      }
    } else if (node.right === null) {
      node.right = new Node(val);
    } else {
      this.insertNode(node.right, val);
    }
  }
  /**
   * @return {root}
  */
  getRoot() {
    return this.root;
  }
  /**
   * @param {number} val
   * @return {boolean}
  */
  search(val) {
    return this.searchNode(this.root, val);
  }
  /**
   * @param {number} val
   * @return {boolean}
  */
  searchNode(root, val) {
    if (root === null) {
      return false;
    }
    if (this.compare(val, root.val) === -1) {
      return this.searchNode(root.left, val);
    } else if (this.compare(val, root.val) === 1) {
      return this.searchNode(root.right, val);
    }
    return true;
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(root, callback) {
    if (root === null) {
      return;
    }
    this.inOrderTraverseNode(root.left, callback);
    callback(root.val);
    this.inOrderTraverseNode(root.right, callback);
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node === null) return;
    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
  /**
   * @return {number}
   */
  min() {
    return this.minNode(this.root);
  }
  /**
   * @param {root}
   * @return {node}
  */
  minNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }
  /**
   * @return {number}
  */
  max() {
    return this.maxNode(this.root);
  }
  /**
   * @param {root}
   * @return {node}
  */
  maxNode(node) {
    let current = node;
    while (current && current.right) {
      current = current.right;
    }
    return current;
  }
  /**
   * @param {number} key
  */
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  /**
   * @param {root} root
   * @param {number} val
  */
  removeNode(root, val) {
    if (root === null) {
      return null;
    }
    if (this.compare(val, root.val) === -1) {
      root.left = this.removeNode(root.left, val);
      return root;
    } else if (this.compare(val, root.val) === 1) {
      root.right = this.removeNode(root.right, val);
      return root;
    }
    if (root.left === null && root.right === null) {
      root = null;
      return root;
    }
    if (root.left === null) {
      root = root.right;
      return root;
    } else if (root.right === null) {
      root = root.left;
      return root;
    }

    const aux = this.minNode(root.right);
    root.val = aux.val;
    root.right = this.removeNode(root.right, aux.val);
    return root;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
  }
  /**
   * @param {root} root 
   * @return {number}
   */
  // hl-hr 因为 （0 1 -1）平衡因子 如果不是这三个值之一，需要平衡该AVL树
  getNodeHeight(root) {
    if (root === null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }
  /**
   * @param {root} root 
   * @return {number}
  */
  getBalanceFactor(root) {
    const heightDifference = this.getNodeHeight(root.left) - this.getNodeHeight(root.right);
    switch (heightDifference) {
      case -2:
        return 1;
      case -1:
        return 2;
      case 1:
        return 4;
      case 2:
        return 5
      default:
        return 3
    }
  }
  /**
   * @param {root} root 
   * @return {number}
  */
  rotationLL(root) {
    const leftRoot = root.left;
    root.left = leftRoot.right;
    leftRoot.right = root;
    return leftRoot;
  }
  /**
   * @param {root} root 
   * @return {number}
  */
  rotationRR(root) {
    const rightRoot = root.right;
    root.right = rightRoot.left;
    rightRoot.left = root;
    return rightRoot;
  }
  /**
   * @param {root} root 
   * @return {number}
  */
  rotationLR(root) {
    root.left = this.rotationRR(root.left);
    return this.rotationLL(root);
  }
  /**
   * @param {root} root 
   * @return {number}
  */
  rotationRL(root) {
    root.right = this.rotationLL(root.right);
    return this.rotationRR(root);
  }
  /**
   * @param {number} val
   * @return {void}
  */
  insert(val) {
    this.root = this.insertNode(this.root, val);
  }
  /**
   * @param {root} root
   * @param {number} val
  */
 insertNode(node, val) {
   if (node === null) {
     return new Node(val)
   } else if (this.compare(val, node,val) === -1) {

   } else {
     
   }
 }
}
