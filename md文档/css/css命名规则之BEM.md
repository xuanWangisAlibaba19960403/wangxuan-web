2013年1月25日

此文章转载自https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

MindBEMding - 让你的头脑圆形BEM语法

由**Harry Roberts**撰写的关于**CSS Wizardry****的文章**。

有一个问题我被问得最多的就是这些问题什么--和__ 你的课是什么意思？

答案是感谢[**BEM**](http://bem.info/)和 [**Nicolas Gallagher**](http://twitter.com/necolas) ......

​    

BEM - 意为*块*，*元素*，*修饰符* - 是[**Yandex**](http://yandex.ru/)的人们想到的前端命名方法。这是一种命名CSS类的智能方法，可以为其他开发人员提供更高的透明度和意义。它们更加严格和信息丰富，这使得BEM命名约定适用于可能持续一段时间的大型项目的开发人员团队。

值得注意的是，我使用*基于* BEM 的命名方案，由[Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)磨练。这篇文章中涉及的命名技术不是原始的BEM技术，而是我更喜欢的改进版本。无论使用何种实际符号，它们都基于相同的BEM原则。

命名约定遵循以下模式：

```css
.block {}

.block__element {}

.block--modifier {}
```

- .block 表示抽象或组件的更高级别。
- .block__element代表一种.block有助于形成.block 整体的后代。
- .block--modifier表示不同的状态或版本.block。

双重而不是单个连字符和下划线的原因是，您的块本身可以用连字符分隔，例如：

```css
.site-search {} /* Block */

.site-search__field {} /* Element */

.site-search--full {} /* Modifier */
```

BEM的目的是告诉其他开发人员更多关于单独使用其名称进行标记的内容。通过阅读一些带有某些类的HTML，您可以看到 - 如果有的话 - 块是相关的; 某些东西可能只是一个组件，某些东西可能是该组件的子*元素*或*元素*，某些东西可能是该组件的变体或*修饰符*。要使用类比/模型，请考虑以下事物和元素是如何相关的：

```css
.person {}

.person__hand {}

.person--female {}

.person--female__hand {}

.person__hand--left {}
```

顶级块是具有元素的“人”，例如“手”。一个人也有变化，例如女性，而这种变化反过来又有元素。这又一次，但写在'普通'CSS：

```css
.person {}

.hand {}

.female {}

.female-hand {}

.left-hand {}
```

这些都有意义，但有点断开。就拿.female例如; 女什么？怎么样.hand; 一个时钟的手？一张纸牌游戏？通过使用BEM，我们可以更具描述性，但也更明确; 我们通过单独命名将具体链接绑定到代码的其他元素。强大的东西。

**特色案例研究：NHS**

我如何帮助NHS快速建立一个全新的产品。

[**阅读案例研究......**](https://csswizardry.com/case-studies/nhs-nhsx-elearning-platform/)

.site-search再次使用前面的示例，使用“常规”命名：

```html
<form class="site-search  full">

    <input type="text" class="field">

    <input type="Submit" value ="Search" class="button">

</form>
```

这些课程相当松散，并没有告诉我们多少。即使我们可以解决它们，它们也是非常不明确的。使用BEM表示法，我们现在可以：

```html
<form class="site-search  site-search--full">

    <input type="text" class="site-search__field">

    <input type="Submit" value ="Search" class="site-search__button">

</form>
```

我们可以看到，我们有一个名为block的块.site-search，它有一个存在于其中的元素.site-search__field。我们还可以看到被.site-search调用的变体.site-search--full。

让我们再看一个例子......

如果您熟悉OOCSS，那么您无疑会熟悉 [**媒体对象**](http://stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code)。在BEM表单中，媒体对象现在将显示为：

```css
.media {}

.media__img {}

.media__img--rev {}

.media__body {}
```

从编写这个CSS的方式来看，我们已经可以收集到它.media__img并且 .media__body必须在内部生存.media，这.media__img--rev是一个微小的变化.media__img。所有这些信息都是从CSS选择器的名称中收集的！

另一个好处是打击以下情况。如果我们再次获取媒体对象：

```html
<div class="media">
    
    <div class="body">

        <h3 class="alpha">Welcome to Foo Corp</h3>

        <p class="lede">Foo Corp is the best, seriously!</p>

    </div>

</div>

```

通过观察，我们看不出类.media和.alpha相关的对方？是吗？怎么样.body和.lede还是.img-rev 和.media？从那个HTML（除非我们非常熟悉媒体对象），我们不知道构成该组件的是什么以及其他什么是可选的。如果我们要用BEM重做它：

```html
<div class="media">

    <div class="media__body">

        <h3 class="alpha">Welcome to Foo Corp</h3>

        <p class="lede">Foo Corp is the best, seriously!</p>

    </div>

</div>
```

我们现在可以立即看到这.media是块，.media__img--rev是一个.media应用了修饰符.media__body的元素，是一个未经修改的元素.media。通过他们班级的名字。这 **非常**有用。

Uuuugly！

反对BEM的一个常见论点是丑陋; 我敢说，如果你*纯粹*根据它的外观回避代码，那么你经常会忽略这一点。除非代码变得不必要的难以维持，或真正更难看了，那么也许你*就*需要使用它之前要三思而后行，但如果它只是看起来很奇怪“，但有一个有效的目的，那么它绝对应该充分之前考虑把它写下来。

我同意BEM确实看起来很奇怪，但它所带来的力量*远远*超过任何与它的外观有关的负面因素......

BEM可能看起来有点搞笑 - 它可能需要更多的输入（大多数文本编辑器都有自动完成，而gzip会否定文件大小的任何差异） - 但它是**如此**强大。

BEM还是不BEM？

我对我现在构建的所有内容都使用BEM表示法，因为它的用处已经反复证明了这一点。我强烈建议其他人考虑采用它，因为它只会使一切变得更紧密，更紧密，使团队更容易维护代码，甚至只需几个月就可以自己维护代码。

但是，当您使用BEM时，请务必记住您不需要将它用于所有内容。举个例子：

```css
.caps { text-transform: uppercase; }
```

这个CSS永远不会属于任何BEM类别，它只是一个独立的规则。

另一个不是BEM的代码示例：

```css
.site-logo {}
```

我们这里有我们的标志; 它可以像这样BEMmed：

```css
.header {}

.header__logo {}
```

但这是不必要的。BEM的诀窍是知道某些东西属于相关类别。仅仅因为某些东西碰巧住在一个区块内，它并不总是意味着它实际上是一个BEM元素。在我们的网站徽标的情况下，它.header纯粹巧合地生活; 它可以很容易地在我们的侧边栏或页脚中。元素的范围可以在任何上下文中开始，因此您需要确保只根据需要应用BEM。另一个例子：

```html
<div class="content">

    <h1 class="content__headline">Lorem ipsum dolor...</h1>

</div>
```

在这里，我们可能只能调用第二类.headline; 这取决于它是否以这种方式设计，**因为**它存在.content，或者它是否 *恰好*存在.content。如果是后者，那么我们不需要BEM。

但是，一切都有可能进入BEM领域。再举一个 .site-logo例子，想象一下我们想要为我们的Christmassy网站设计制作一个节日版的徽标。我们可以有：

```css
.site-logo {}

.site-logo--xmas {}
```

我们可以使用--修饰符表示法快速构建各种变体。

BEM最难的部分之一是决定何时开始和停止范围，以及何时（或不）使用它。这是'你知道什么时候才知道'的情况。

最后一句话

这就是BEM（或其略有变化）; 一个非常有用，功能强大且简单的命名约定，使您的前端代码更易于阅读和理解，更易于使用，更易于扩展，更强大，更直观，更严格。

对于所有BEM来说看起来有点奇怪，它对于前端开发人员的工具箱来说是一个非常有价值的补充，无论项目如何。