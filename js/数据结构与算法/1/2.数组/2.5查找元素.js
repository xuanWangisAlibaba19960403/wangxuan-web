const names = ['david', 'bob', 'paul'];
const name = 'xxx';
// 从前往后 遇到第一个相同的就结束执行了
const position = names.indexOf(name);
// 从后往前 遇到第一个相同的就结束执行了
const position = names.lastIndexOf(name);
// 有就返回索引，没有就是-1
