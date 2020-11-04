/**
 * @param {array} array 
 * @return {array} 
 */
const mergeSort = (array) => {
  if (array.length > 1) {
    const { length } = array;
    const middle = length >> 1;
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    array = merge(left, right);
  }
  return array;
}

/**
 * @param {array} left
 * @param {array} right
 * @return {array} 
 */
const merge = (left, right) => {
  const tempArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      tempArray.push(left.shift());
    } else {
      tempArray.push(right.shift());
    }
  }
  while (left.length > 0) {
    tempArray.push(left.shift());
  }
  while (right.length > 0) {
    tempArray.push(right.shift());
  }
  return tempArray;
}

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]));