# canvas图片合成后下载网络错误问题解决方案

你面临的不是与fabricjs直接相关（也不是画布甚至不是javascript btw），而是来自于一些浏览器（包括Chrome）对 src的限制，当达到这个限制时，你唯一能得到的就是控制台中的这个不可复制的“网络错误”下载失败，但你作为开发人员不知道它。

```javascript
// 将base64编码图片转换为Blob对象
function getUrlToBlob(base64) {
    const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
        const url = `image/${ext}`;
        const dataURL = canvas.toDataURL('image/jpeg', url);
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bytes = window.atob(dataURL.split(',')[1]);
        // 去掉url的头，并转换为byte
        // 处理异常,将ascii码小于0的转换为大于0
        const ab = new ArrayBuffer(bytes.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        const file = new File([ab], { type: mime });
        return file;
}
// 下载图片
      downloadImg() {
        const that = this;
        const image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = () => {
            // 返回的对象里面的type属性就是图片的后缀名
          const base64 = that.getUrlToBlob(image);
          const savelink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
          // 对象URL的字符串表示将小到足以解决浏览器的限制,返回的地址不会受到浏览器的限制
           savelink.href = URL.createObjectURL(base64);
          // 设置下载图片的名称
          let fileName = new Date().getTime();
          fileName += String(Math.floor(Math.random() * (99999 - 1)) + 1);
          if (base64.type === 'image/png') {
            fileName += '.png';
          } else {
            fileName += '.jpg';
          }
          savelink.download = fileName;
          // 下载图片
          const event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          savelink.dispatchEvent(event);
        };
        image.src = this.qrCode;
      },
```



