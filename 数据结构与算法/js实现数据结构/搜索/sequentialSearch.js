/**
 * @param {array} array
 * @param {number} value
 */

function sequentialSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}