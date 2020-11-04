/**
 * @param {array} array
 * @param {number} value
 * @return {number}
 */

function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        const element = array[mid];
        console.log('mid element is ' + element);
        if (element < value) {
            left = mid + 1;
            console.log('left is ' + left);
        } else if (element > value) {
            right = mid - 1;
            console.log('right is ' + right);
        } else {
            console.log('found it');
            return mid;
        }
    }
    return left > right ? left : right;
}


console.log(binarySearch([1, 3, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4], 5));