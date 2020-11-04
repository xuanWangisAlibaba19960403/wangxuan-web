/**
 * @param {array} array
 * @return {array}
 */
const quickSort = (array) => {
  return quick(array, 0, array.length - 1);
}

/**
 * @param {array} array
 * @param {number} left
 * @param {number} right
 * @return {array}
 */
const quick = (array, left, right) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    console.log('partition-resolve', index);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, index - 1);
    }
  }
  return array;
}

/**
 * @param {array} array
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const partition = (array, left, right) => {
  let pivot = array[left + right >> 1];
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([8, 4, 3, 5, 7, 6, 2, 1]));