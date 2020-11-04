/**
 * 
 * @param {array} array 
 * @param {number} value 
 * @return {number}
 */
function binarySearch(array, value) {
  return binarySearchRecursive(array, value, 0, array.length - 1);
}

/**
 * 
 * @param {array} array 
 * @param {number} value 
 * @param {number} left 
 * @param {number} right 
 * @return {number}
 */
function binarySearchRecursive(array, value, left, right) {
  if (left <= right) {
    const mid = left + right >> 1;
    if (array[mid] < value) {
      return binarySearchRecursive(array, value, mid + 1, right);
    } else if (array[mid] > value) {
      return binarySearchRecursive(array, value, left, mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 5, 9, 11], 5));