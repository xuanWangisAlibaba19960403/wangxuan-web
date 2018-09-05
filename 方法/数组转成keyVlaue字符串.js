function keyValue(arr) {
let str = '';
for(let i = 0;i < arr.length;i++) {
if(i%2 === 0) {
str += arr[i] + ':';
}else {
str += arr[i] + ',';
}
}
str = str.slice(0,str.lastIndexOf(','))
return str;
};