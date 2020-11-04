class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  /**
   * @param element 在双端队列前端添加元素
   */
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  /**
   * @param element 在双端队列后端添加元素
   */
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  /**
   * 从双端队列的前端移除第一个元素
   */
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const ret = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return ret;
  }
  /**
   * 从双端队列的后端移除第一个元素
   */
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const ret = this.items[this.count];
    delete this.items[this.count];
    return ret;
  }
  /**
   * @return element 返回队列中第一个元素
   */
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  /**
   * @return element 返回队列中第一个元素
   */
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
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
    this.items = {};
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
    let ret = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      ret += `,${this.items[i]}`;
    }
    return ret;
  }
}