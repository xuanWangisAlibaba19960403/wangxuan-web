# canvas绘图清晰度问题解决方案

屏幕都有一个devicePixelRatio（设备像素比）的值是多少，即：视网膜的屏幕物理像素640，独立像素320，所以devicePixelRadio=640 / 320 = 2;。什么意思？比如说一张图片为100*100像素，在devicePixelRadio=2的情况，相当于用2个像素的宽度来渲染1个像素，所以实际上占了200*200的空间，相当于放大1倍。在canvas也有类似的属性，该属性的值决定了浏览器在渲染canvas之前会用几个像素来来存储画布信息。

##1.pc端

统一将canvasDOM节点的width属性设置为其csswidth属性的两倍，同理将height属性也设置为cssheight属性的两倍，这样等同于把图片缩小了一倍。

```html
<canvas width="320" height="180" style="width:160px;height:90px;"></canvas>
这样整个canvas的坐标系范围就扩大为两倍，但是在浏览器的显示大小没有变，canvas画图的时候，按照扩大化的坐标系来显示，不清晰的问题就得以改善了
<!-- 通过 img 标签引入图片，以便绘制到 canvas 中 -->
<img src="html5rocks.png" alt="" width="300" height="90">
 
<!-- canvas -->
<canvas width="300" height="90"></canvas>
 
<script>
    function init() {
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        ctx.drawImage(document.querySelector('img'), 0, 0, 300, 90);
    }
    window.onload = init;
</script>

<style>
    
</style>

```

PC端不考虑像素比的原因是，一般PC端像素比为1，无需操作。

##2.移动端

移动端

```html

```

