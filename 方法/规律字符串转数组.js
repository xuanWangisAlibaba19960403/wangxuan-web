const str = '11,22,33';

function strChangeArr (str, ...sign) {

const arr = str.split(sign);

for(let i = 0;i < arr.length;i++){
arr[i] = arr[i] - 0;
}

return arr;
}

console.log(strChangeArr(str));