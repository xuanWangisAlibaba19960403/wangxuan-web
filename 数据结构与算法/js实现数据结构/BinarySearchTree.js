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