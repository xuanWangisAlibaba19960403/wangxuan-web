// 反转
const nums = [1, 2, 3];
nums.reverse();
// 排序
const nums = [1, 3, 100, 2];
nums.sort(compare); // 1, 100, 2, 3;
function compare(num1, num2) {
    return num1 - num2;
}