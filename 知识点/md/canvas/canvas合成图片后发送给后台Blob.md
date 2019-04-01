# canvas合成图片发送给后台

```javascript
const canvas = document.getElementById('Mycanvas');
// 获取canvas容器
const ctx = canvas.getContext('2d');
// 创建画布
const img = new Image();
/* 创建img实例
用new操作符 就是创建一个构造函数的实例，Image是内置的一个构造函数。
得到Image的实例后，就可以在这个实例上监听事件，比如这里用到的load事件。*/
img.src = '图片路径';
img.onload = () => {
    // 先画图片
    ctx.drawImage(img, 0, 0, 图片宽, 图片高);
    // 设置文字的大小
    ctx.font = '16px Microsoft YaHei';
    // 设置文字的颜色
    ctx.fillStyle = '000';
    // 设置文字坐标
    // 画文字
    ctx.fillText('文字', X坐标, Y坐标);
};
// 此时画布上已经有了内容 需要导出base64图片编码
const image = myCanvas.toDataURL('image/png');
// 图片即导出image/png类型,image即base64图片编码
// base64图片编码的字符串长度对于一般数据库来说非常的长，尤其是后台不支持存储base64就很头疼
/* 可以讲base64图片编码转化为file对象或者blob对象，file对象是继承自blob对象
```

[File对象](https://developer.mozilla.org/zh-CN/docs/Web/API/File),[Blob对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)具体请详见资料

```javascript
/*邀请卡一般会保持清晰度，所以不用降低图片的质量*/
convertBase64UrlToBlob(urlData) {
    // 前两部获取图片的类型，mime即图片类型
    const arr = urlData.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    // bytes为去掉 'data:image/jpeg:base64' 去掉base64图片编码的头部
    const bytes = window.atob(urlData.split(',')[1]);
    // 去掉url的头，并转换为byte
    // 处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    // 返回一个Blob对象
    return new Blob([ab], { type: mime });
    
    // 还有一种情况需要发送file对象
    // 自己构建的File对象没有name,可以自己起名
    // let filename = new Date().getTime();
    // filename += Math.random() * (99999 - 1) + 1;
    // filename += .png;
    return new File([ab], filename, { type: mime })
},
const url = convertBase64UrlToBlob(image);
// 此时就可以去发送图片的编码了
// 上传图片需要设置请求头
const config = { headers: { 'Content-Type': 'multipart/form-data' } };
const formData = new FormData();
formData.append('后台接受图片的字段名', url);
ajax.post('url', formData, config).then((res) => {
    if(res.status === 200) {
        // 成功
    } else {
        // 失败
    }
})
// 具体情况具体处理 如有不对希望指出，谢谢
```

