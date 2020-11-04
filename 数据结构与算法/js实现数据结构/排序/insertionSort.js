/**
 * @param {array} array 
 * @return {array} 
 */
const insertionSort = (array) => {
    const { length } = array;
    let temp;
    for (let i = 1; i < length; i++) {
        let j = i - 1;
        temp = array[i];
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort([3, 9, 5, 7, 1, 3, 5]));