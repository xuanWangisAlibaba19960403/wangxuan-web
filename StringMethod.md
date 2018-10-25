# 字符串方法

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.length) // 5 字符串长度
```

#### 1.charAt()

charAt(index):返回子字符串，index为字符串下标，index取值范围[0,str.length-1]

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.charAt(0)); // 'h' 第一个字符
console.log(str1.charAt(str.length-1)); // 'o' 最后一个字符
```

####2.substring()

substring(startIndex, endIndex):返回选择的一段字符串，startindex为开始字符串下标，endindex为结束字符串下标，index取值范围[0,str.length-1]

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.substring(0，2)); // 'h' 第1~2个字符
console.log(str1.substring(-1)); // 'hello' 原字符串
```

#### 3.substr()

substr(start,length):包含从字符串的 *start*（包括 start 所指的字符） 处开始的 length 个字符。如果没有指定 length，那么返回的字符串包含从 *start* 到字符串的结尾的字符。

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.substr(1)); // 'ello' 从第一个字符截取到结尾
console.log(str1.substr(1，2)); // 'el' 从第一个字符开始截取，截取2个字符
console.log(str1.substr(-1)); // 'o' 数字为负数时从后往前截取
```

#### 4.slice()

slice(start,end):一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.slice(1)); // 'ello' 从第一个字符截取到结尾
console.log(str1.slice(1，3)); // 'el' 从第一个字符开始截取，截取2个字符
console.log(str1.slice(-1)); // 'o' 数字为负数时从后往前截取 最后一个字符
```

#### 5.indexOf()

*注意大小写*

indexOf(searchvalue,fromindex):该方法将从头到尾地检索字符串 ，看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的开头（没有指定 fromindex 时）。如果找到一个 searchvalue，则返回 searchvalue 的第一次出现的位置。字符串中的字符位置是从 0 开始的。

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.indexOf('e')); // 1 从第一个字符开始检索
console.log(str1.indexOf('e'，3)); // -1 从第三个字符开始检索，未找到返回-1
console.log(str1.indexOf('e'，-1)); // 1 数字为负数时从后往前检索
```

#### 6.lastIndexOf()

*注意大小写*

lastIndexOf(searchvalue,fromindex):该方法将从尾到头地检索字符串字符串，看它是否含有子串 *searchvalue*。开始检索的位置在字符串的 *fromindex* 处或字符串的结尾（没有指定 *fromindex* 时）。如果找到一个 *searchvalue*，则返回 *searchvalue* 的第一个字符在 字符串中的位置。字符串中的字符位置是从 0 开始的。

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.indexOf('l')); // 3 从第一个字符开始检索 找到最后一个符合的字符
console.log(str1.indexOf('l'，3)); // -1 从第三个字符开始检索，未找到返回-1
console.log(str1.indexOf('h'，-1)); // 1 数字为负数时从前往后检索
```

#### 7.split()

split(separator,howmany):一个字符串数组。该数组是通过在 *separator* 指定的边界处将字符串 stringObject 分割成子串创建的。返回的数组中的字串不包括 *separator* 自身。

但是，如果 *separator* 是包含子表达式的正则表达式，那么返回的数组中包括与这些子表达式匹配的字串（但不包括与整个正则表达式匹配的文本）。

```javascript
const str1 = 'cabacad'; //创建一串字符串
console.log(str1.split('a')); //  ["c", "b", "c", "d"] 按'a'开始截取，返回一个数组
console.log(str1.indexOf('a'，1)); // ["c"] 按'a'开始截取，返回的数组长度为1
```

#### 8.replace()

字符串的 replace() 方法执行的是查找并替换的操作。它将在字符串中查找与 regexp 相匹配的子字符串，然后用 *replacement* 来替换这些子串。如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串。

```javascript
const str1 = 'helloh'; //创建一串字符串
console.log(str1.replace('h','H')); //  "Helloh" 替换只会替换第一个
console.log(str1.replace(/h/g,'H')); // "HelloH" 利于正则表达式可以替换所有要替换的字符
```

#### 9.toLocaleUpperCase()

在字符串中的所有小写字符全部被转换为了大写字符。

```javascript
const str1 = 'hello'; //创建一串字符串
console.log(str1.toLocaleUpperCase()); //  "HELLO" 返回大写字符
```

#### 10.toLocaleLowerCase()

在字符串中的所有小写字符全部被转换为了大写字符。

```javascript
const str1 = 'HELLO'; //创建一串字符串
console.log(str1.toLocaleUpperCase()); //  "hello" 返回小写字符
```

####11.includes(), startsWith(), endsWith()

传统上，JavaScript 只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

- **includes()**：返回布尔值，表示是否找到了参数字符串。
- **startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。
- **endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。

```javascript
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。

```javascript
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

上面代码表示，使用第二个参数`n`时，`endsWith`的行为与其他两个方法有所不同。它针对前`n`个字符，而其他两个方法针对从第`n`个位置直到字符串结束。

####12.repeat()

`repeat`方法返回一个新字符串，表示将原字符串重复`n`次。

```javascript
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

参数如果是小数，会被取整。

```javascript
'na'.repeat(2.9) // "nana"
```

如果`repeat`的参数是负数或者`Infinity`，会报错。

```javascript
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
```

但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于`-0`，`repeat`视同为 0。

```javascript
'na'.repeat(-0.9) // ""
```

参数`NaN`等同于 0。

```javascript
'na'.repeat(NaN) // ""
```

如果`repeat`的参数是字符串，则会先转换成数字。

```javascript
'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"
```

