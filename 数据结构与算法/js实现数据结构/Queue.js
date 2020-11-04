class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = new Map();
  }
  /**
   * @param element 向队尾添加元素
   */
  enqueue(element) {
    this.items.set(this.count, element);
    this.count++;
  }
  /**
   * @param element 移除队列中第一个元素
   * @return element
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const ret = this.items.get(this.lowestCount);
    this.items.delete(this.lowestCount);
    this.lowestCount++;
    return ret;
  }
  /**
   * @return element 返回队列中第一个元素
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.get(this.lowestCount);
  }
  /**
   * @return {boolean} 队列是否为空
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * @return {number} 返回队列元素个数
   */
  size() {
    return this.count - this.lowestCount;
  }
  /**
   * 清空队列
   */
  clear() {
    this.items.clear();
    this.count = 0;
    this.lowestCount = 0;
  }
  /**
   * 返回字符串队列元素
  */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    return [...this.items.values()].toString();
  }
}