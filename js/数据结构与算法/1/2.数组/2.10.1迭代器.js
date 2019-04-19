// 不生成新数组
function square(num) {
    console.log('num:', num ^ 2);
}

const nums = [1, 3, 5];
nums.forEach(square);

function isEven(num) {
    return num % 2 === 0;
}
// 全部为ture返回true
const even = nums.every(isEven);

var someEven = nums.some(isEven);

function add(total, currentValue) {
    return total + currentValue; 
}
// 从左往右
const count = nums.reduce(add);
// 从右往左
const count = nums.reduceRight(add);