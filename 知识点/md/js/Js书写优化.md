# Js书写模式

### 按强类型风格书写代码

```javascript
// 没有指明类型
const num,
    str,
    obj;
```

这里声明了三个变量，但其实没什么用，因为解释器不知道它们是什么类型的。

```javascript
// 指明变量类型
const num = 0,
    str = '',
    obj = null;                                                                                                     
```

定义变量的时候就给它一个默认值，这样方便了解释器，也方便了代码阅读。

```javascript
// 改变变量类型
let num = 5;
num = '-' + num;
```

第一行它是一个整型；而第二行变成了一个字符串。当数据类型发生转变，js解释器就会做出一些额外的操作。

```javascript
// 好的写法,改变变量类型
const num = 5;
const sign = '-' + 5;
```

函数的返回值应该是确定的，不建议使用下列的写法。

```javascript
function getPrice(count) {
    if (count < 0) {
        return '';
    } else {
        return count * 100;
    }
}
```

getPrice这个函数有可能返回一个整数，也有可能返回一个空白的字符串。虽然它是符合js语法的，但是编码风格是不好的。使用你这个函数的人会有点无所适从，不敢直接进行加减乘除，因为如果返回字符串进行运算的话值就是NaN。

```javascript
function getPrice(count) {
    if (count < 0) {
        return -1;
    } else {
        return count * 100;
    }
}
```

类型不确定的写法有时候会比较方便，但是这种“方便”只是对于写的时候比较方便，对于以后的阅读和维护确实不方便的。