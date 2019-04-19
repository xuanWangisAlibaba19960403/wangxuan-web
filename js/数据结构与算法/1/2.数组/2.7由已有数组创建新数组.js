// concat 和 splice 方法允许通过已有数组创建新数组
const arr1 = ['mike', 'bob', 'david'];
const arr2 = ['ann', 'ken'];
const arr3 = arr1.concat(); // 等同于深拷贝
arr3 === arr1 // false
arr1.splice() // 增加或者移除元素
