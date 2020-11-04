const _items = Symbol('stackItems');
class Stack {
  constructor() {
    this.count = 0;
    this[_items] = new Map();
  }
  /**
   * @param elements 栈顶添加元素
   */
  push(element) {
    this[_items].set(this.count, element);
    this.count++;
  }
  /**
   * @return elements 栈顶移除元素
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const ret = this[_items].get(this.count);
    this[_items].delete(this.count);
    return ret;
  }
  /**
   * @return elements 查看栈顶元素
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this[_items].get(this.count - 1);
  }
  /**
   * @return {boolean} 检查栈是否为空
   */
  isEmpty() {
    return this[_items].length === 0;
  }
  /**
   * @return {boolean} 检查栈的长度
   */
  size() {
    return this.count;
  }
  /**
   * 清空栈
   */
  clear() {
    this[_items].clear();
    this.count = 0;
  }
  /**
   * 返回字符串栈元素
   */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    return [...this[_items].values()].toString();
  }
}