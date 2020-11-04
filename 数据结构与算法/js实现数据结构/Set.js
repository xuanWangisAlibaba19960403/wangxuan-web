class Set {
  constructor() {
    this.items = {};
  }
  /**
   * @param element 集合添加元素
   * @return { boolean } // 元素是否添加成功
   */
  add(element) {
    if (this.has(element) === false) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  /**
   * @param element
   * @return { boolean } // 元素是否删除成功
   */
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  /**
   * @param element
   * @return { boolean } // 集合中是否存在此元素
   */
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  /**
   * 清空集合
   */
  clear() {
    this.items = {};
  }
  /**
   * @return {number}
   */
  size() {
    return Object.keys(this.items).length;
  }
  /**
   * @return {array}
   */
  values() {
    return Object.values(this.items);
  }
  /**
   * @param {set} otherSet
   * @return {set}
   */
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }
  /**
   * @param {set} otherSet
   * @return {set}
   */
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerrSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherSet;
      smallerrSet = values;
    }
    smallerrSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    })
    return intersectionSet;
  }
  /**
   * @param {set} otherSet
   * @return {set}
   */
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (otherSet.has(value) === false) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  /**
   * @param {set} otherSet
   * @return {boolean}
   */
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every(value => {
      if (otherSet.has(value) === false) {
        isSubset = false;
        return false;
      }
      return true;
    })
    return isSubset;
  }
}