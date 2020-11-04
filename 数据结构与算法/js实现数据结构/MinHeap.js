function compare(a, b) {
  console.log(a, b);
  if (a === b) {
    return 0;
  }
  return a < b ? -1 : 1;
}

class MinHeap {
  constructor() {
    this.compare = compare;
    this.heap = [];
  }
  /**
   * @param {number} index 
   * @return {number}
   */
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  /**
   * @param {number} index 
   * @return {number}
   */
  getRightIndex(index) {
    return 2 * index + 2;
  }
  /**
   * @param {number} index 
   * @return {number}
   */
  getParentIndex(index) {
    if (index === 0) {
      return -Infinity;
    }
    return Math.floor((index - 1) / 2);
  }
  /**
   * @param {number} val 
   * @return {boolean}
   */
  insert(val) {
    if (val === null) return false;
    this.heap.push(val);
    this.siftUp(this.heap.length - 1);
    return true;
  }
  /**
   * @param {number} index
   * @return {void}
   */
  siftUp(index) { // 上移操作 确保二叉堆有序
    let parent = this.getParentIndex(index);
    console.log('compare', this.compare(this.heap[parent], this.heap[index]))
    while (index > 0 && this.compare(this.heap[parent], this.heap[index]) > 1) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  /**
   * @param {number} index
   * @return {void}
   */
  siftDown(index) {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();
    if (left < size && this.compare(this.heap[element], this.heap[left]) > 1) {
      element = left;
    }
    if (right < size && this.compare(this.heap[element], this.heap[right]) > 1) {
      element = right;
    }
    if (index !== element) {
      [this.heap[index], this.heap[element]] = [this.heap[element], this.heap[index]];
      this.siftDown(element);
    }
  }
  /**
   * @return {number}
   */
  size() {
    return this.heap.length;
  }
  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.heap.length === 0;
  }
  /**
   * @return {number}
   */
  findMinimum() {
    return this.isEmpty() ? -Infinity : this.heap[0];
  }
  /**
   * @return {number}
   */
  extract() {
    if (this.isEmpty()) {
      return -Infinity;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedVal = this.heap.shift();
    this.siftDown(0);
    return removedVal;
  }
}