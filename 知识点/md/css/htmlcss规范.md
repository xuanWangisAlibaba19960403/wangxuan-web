# Google HTML / CSS样式指南



### 目录

[1背景](https://google.github.io/styleguide/htmlcssguide.html#Background)[2总则](https://google.github.io/styleguide/htmlcssguide.html#General)[2.1一般风格规则](https://google.github.io/styleguide/htmlcssguide.html#General_Style_Rules)[2.2一般格式规则](https://google.github.io/styleguide/htmlcssguide.html#General_Formatting_Rules)[2.3一般元规则](https://google.github.io/styleguide/htmlcssguide.html#General_Meta_Rules)[3 HTML](https://google.github.io/styleguide/htmlcssguide.html#HTML)[3.1 HTML样式规则](https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules)[3.2 HTML格式规则](https://google.github.io/styleguide/htmlcssguide.html#HTML_Formatting_Rules)[4 CSS](https://google.github.io/styleguide/htmlcssguide.html#CSS)[4.1 CSS样式规则](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules)[4.2 CSS格式规则](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)[4.3 CSS元规则](https://google.github.io/styleguide/htmlcssguide.html#CSS_Meta_Rules)[分手](https://google.github.io/styleguide/htmlcssguide.html#Parting_Words)

## 1背景[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Background)

本文档定义了HTML和CSS的格式和样式规则。它旨在改善协作，代码质量和支持基础架构。它适用于使用HTML和CSS的原始工作文件，包括GSS文件。只要保持通用代码质量，工具就可以自由地进行模糊处理，缩小和编译。

## 2总则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#General)

### 2.1一般风格规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#General_Style_Rules)

#### 2.1.1议定书[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Protocol)

尽可能将HTTPS协议用于嵌入式资源。

`https:`除非相应的文件不能通过HTTPS使用，否则请始终对图像和其他媒体文件，样式表和脚本使用HTTPS协议（）。

```html
<！ - 不推荐：省略协议 - > 
<script src =“// ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js”> </ script> 

<！ - - 不推荐：使用HTTP协议 - > 
<script src =“http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js”> </ script>
<！ - 推荐 - > 
<script src =“https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js”> </ script>
/ *不推荐：省略协议* / 
@ import' // fonts.googleapis.com/css?family=Open+Sans'; 

/ *不推荐：使用HTTP协议* / @ 
import“http://fonts.googleapis.com/css?family=Open+Sans”;
/ *推荐* / @ 
导入'https://fonts.googleapis.com/css?family=Open+Sans';
```

### 2.2一般格式规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#General_Formatting_Rules)

#### 2.2.1缩进[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Indentation)

一次缩进2个空格。

不要使用制表符或混合制表符和空格来缩进。

```html
<ul> 
  <li 
  >很棒
< li>很棒</ ul>
.example { 
  color：blue; 
}
```

#### 2.2.2资本化[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Capitalization)

仅使用小写。

所有代码必须为小写：这适用于HTML元素名称，属性，属性值（除非`text/CDATA`），CSS选择器，属性和属性值（字符串除外）。

```html
<！ - 不推荐 - > 
<A HREF="/">主页</A>
<！ - 推荐 - > 
<img src =“google.png”alt =“Google”>
/ *不推荐* / 
颜色：＃E5E5E5;
/ *推荐* / 
颜色：＃e5e5e5;
```

#### 2.2.3尾随空格[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Trailing_Whitespace)

删除尾随空格。

尾随的空白是不必要的，可以使差异复杂化。

```html
<！ - 不推荐 - > 
<p>什么？_
<！ - 推荐 - > 
<p>是的。
```

### 2.3一般元规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#General_Meta_Rules)

#### 2.3.1编码[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Encoding)

使用UTF-8（无BOM）。

确保您的编辑器使用UTF-8作为字符编码，没有字节顺序标记。

通过指定HTML模板和文档中的编码`<meta charset="utf-8">`。不要指定样式表的编码，因为它们假定为UTF-8。

（有关编码以及何时以及如何指定它们的更多信息，请参阅[处理HTML和CSS中的字符编码](https://www.w3.org/International/tutorials/tutorial-char-enc/)。）

#### 2.3.2评论[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Comments)

尽可能根据需要解释代码。

使用注释来解释代码：它涵盖了什么，它的目的是什么，为什么使用或首选的解决方案？

（这个项目是可选的，因为总是要求完整记录的代码并不是一个现实的期望。对于HTML和CSS代码，里程可能差别很大，并且取决于项目的复杂性。）

#### 2.3.3行动事项[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Action_Items)

标记待办事项和行动项目`TODO`。

`TODO`仅使用关键字突出显示待办事项，而不是其他常见格式 `@@`。

在括号中附加联系人（用户名或邮件列表），格式如下 `TODO(contact)`。

在冒号后附加操作项，如`TODO: action item`。

```django
{＃TODO （约翰。DOE ）：重新审视定心＃} <中心> 测试</ 中心>
<！ -  TODO：删除可选标签 - > <ul> <li> 苹果</ li> <li> 橙子</ li> </ ul>

  
  
```

## 3 HTML[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML)

### 3.1 HTML样式规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML_Style_Rules)

#### 3.1.1文件类型[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Document_Type)

使用HTML5。

HTML5（HTML语法）是所有HTML文档的首选：`<!DOCTYPE html>`。

（建议使用HTML，因为`text/html`。不要使用XHTML。因为XHTML [`application/xhtml+xml`](https://hixie.ch/advocacy/xhtml)缺乏浏览器和基础架构支持，并且提供的优化空间比HTML少。）

尽管HTML很好，但不要关闭void元素，即写入`<br>`，而不是 `<br />`。

#### 3.1.2 HTML有效性[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML_Validity)

尽可能使用有效的HTML。

使用有效的HTML代码，除非由于无法达到的文件大小性能目标而无法实现。

使用[W3C HTML验证器](https://validator.w3.org/nu/)等工具 进行测试。

使用有效的HTML是一个可衡量的基线质量属性，有助于学习技术要求和约束，并确保正确的HTML使用。

```html
<！ - 不推荐 - > <title> 测试</ title> <article> 这只是一个测试。
<！ - 推荐 - > <！DOCTYPE html> <meta charset = “utf-8” > <title> 测试</ title> <article> 这只是一个测试。</文章>

 
```

#### 3.1.3语义[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Semantics)

根据其用途使用HTML。

使用元素（有时被错误地称为“标记”）来创建它们。例如，使用标题元素作为标题，`p`段落`a`元素，锚点元素等。

根据其目的使用HTML对于可访问性，重用和代码效率的原因很重要。

```html
<！ - 不推荐 - > <div onclick = “ goToRecommendations （）; ” > 所有建议</ div>
 
<！ -推荐- > <a HREF = "recommendations/"> 所有建议</a>的
 
```

#### 3.1.4多媒体后备[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Multimedia_Fallback)

提供多媒体的替代内容。

对于多媒体，如图像，视频，动画对象`canvas`，请确保提供替代访问。对于图像，意味着使用有意义的替代文本（`alt`）以及视频和音频脚本和字幕（如果可用）。

提供替代内容对于可访问性原因是重要的：盲人用户几乎不知道图像的内容`@alt`，而其他用户可能无法理解视频或音频内容是什么。

（对于其`alt`属性会引入冗余的图像，以及用于纯粹装饰的图像，您无法立即使用CSS，请不要使用替代文本，如`alt=""`。）

```html
<！ - 不推荐 - > <img src = “spreadsheet.png” >
 
<！ - 推荐 - > <img src = “spreadsheet.png” alt = “电子表格截图。” >
  
```

#### 3.1.5关注点分离[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Separation_of_Concerns)

将表现与表现分开。

严格保持结构（标记），表示（样式）和行为（脚本），并尝试将三者之间的交互保持在绝对最小值。

也就是说，确保文档和模板仅包含仅用于结构目的的HTML和HTML。将所有表现形式移动到样式表中，并将所有行为都转换为脚本。

此外，通过从文档和模板中链接尽可能少的样式表和脚本，使联系区域尽可能小。

出于维护原因，将结构从表示与行为分离是很重要的。更改HTML文档和模板总是比更新样式表和脚本更昂贵。

```html
<！ - 不推荐 - > <！DOCTYPE html> <title> HTML糟透了</ title> <link rel = “stylesheet” href = “base.css” media = “screen” > <link rel = “stylesheet” href = “grid.css” media = “screen” > <link rel = “stylesheet” href = “print.css” media = “print” > <h1 style = “font - size ：1em


   
   
   
  ; “ > HTML糟透了</ h1> <p> 我在几个网站上看过这个，但现在我确定：<u> HTML是愚蠢的！1 </ u> <center> 我简直不敢相信如果不
  重新做所有事情，就无法控制我网站的样式！</ center>

  
<！ - 推荐 - > <！DOCTYPE html> <title> 我的第一个仅限CSS的重新设计</ title> <link rel = “stylesheet” href = “default.css” > <h1> 我的第一个仅限CSS的重新设计</ h1> <p> 我在几个网站上已经读过这个，但今天我实际上是
  这样做的：分离关注点并避免在
  我的网站的HTML中出现任何表现形式。<p> 太棒了！


  
```

#### 3.1.6实体参考[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Entity_References)

不要使用实体引用。

没有必要使用像`&mdash;`，`&rdquo;`或者 `&#x263a;`假设相同的编码（UTF-8）用于文件和编辑器以及团队之间的实体引用。

唯一的例外适用于HTML中具有特殊含义的字符（如`<` 和`&`）以及控件或“不可见”字符（如不间断空格）。

```html
<！ - 不推荐 - > 
欧元的货币符号是“＆eur;＆rdquo;”。
<！ - 推荐 - > 
欧元的货币符号是“€”。
```

#### 3.1.7可选标签[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Optional_Tags)

省略可选标签（可选）。

对于文件大小优化和可扫描性目的，请考虑省略可选标记。在[HTML5规范](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission) 定义标签可以被遗漏了什么。

（这种方法可能需要建立宽限期作为更广泛的指导，因为它与Web开发人员通常教授的内容明显不同。出于一致性和简单性的原因，最好省略所有可选标签，而不仅仅是选择。）

```html
<！ - 不推荐 - > <！DOCTYPE html> <html> <head> <title> 花钱，花费字节</ title> </ head> <body> <p> Sic。</ p> </ body> </ html>


  
    
  
  
    
  
<！ - 推荐 - > <！DOCTYPE html> <title> 省钱，节省字节</ title> <p> Qed。
```

#### 3.1.8 `type`属性[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#type_Attributes)

省略`type`样式表和脚本的属性。

不要使用`type`样式表的属性（除非不使用CSS）和脚本（除非不使用JavaScript）。

指定`type`为HTML5意味着在这些背景属性是没有必要的 [`text/css`](https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type) ，并[`text/javascript`](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type) 为默认值。即使是旧版浏览器也可以安全地完成此操作。

```html
<！ - 不推荐 - > <link rel = “stylesheet” href = “https://www.google.com/css/maia.css” type = “text / css” >
  
  
<！ - 推荐 - > <link rel = “stylesheet” href = “https://www.google.com/css/maia.css” >
  
<！ - 不推荐 - > <script src = “https://www.google.com/js/gweb/analytics/autotrack.js” type = “text / javascript” > </ script>
 
  
<！ - 推荐 - > <script src = “https://www.google.com/js/gweb/analytics/autotrack.js” > </ script>
 
```

### 3.2 HTML格式规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML_Formatting_Rules)

#### 3.2.1一般格式[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#General_Formatting)

为每个块，列表或表元素使用一个新行，并缩进每个这样的子元素。

独立于元素的样式（因为CSS允许元素为每个`display`属性赋予不同的角色），将每个块，列表或表元素放在新行上。

另外，如果它们是块，列表或表元素的子元素，则缩进它们。

（如果遇到列表项之间的空白问题，可以将所有`li`元素放在一行中。鼓励linter抛出警告而不是错误。）

```html
<blockquote> <p> <em> Space </ em> ，最后的边界。</ p> </ blockquote>
  
<ul> <li> Moe <li> Larry <li> Curly </ ul>
  
  
  
<table> <thead> <tr> <th scope = “col” > 收入<th scope = “col” > 税收<tbody> <tr> <td> $ 5.00 <td> $ 4.50 </ table>
  
    
       
       
  
    
      
      
```

#### 3.2.2 HTML Line-Wrapping[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML_Line-Wrapping)

打破长行（可选）。

虽然没有针对HTML的列限制建议，但如果显着提高可读性，则可以考虑包装长行。

换行时，每条延续线应至少比原始行缩进4个空格。

```html
<md-progress-circular md-mode = “indeterminate” class = “md-accent” ng-show = “ctrl.loading” md-diameter = “35” > </ md-progress-circular>  
     
<md-progress-circular md-mode = “indeterminate” class = “md-accent” ng-show = “ctrl.loading” md-diameter = “35” > </ md-progress-circular>
    
    
    
    
<md-progress-circular md-mode = “indeterminate” class = “md-accent” ng-show = “ctrl.loading” md-diameter = “35” > </ md-progress-circular> 
                      
                      
                      
```

#### 3.2.3 HTML引号[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#HTML_Quotation_Marks)

引用属性值时，请使用双引号。

在属性值周围使用double（`""`）而不是单引号（`''`）。

```html
<！ -不推荐- > <a 类='maia-button maia-button-secondary'> 登陆</A>
 
<！ -推荐- > <a 类= "maia-button maia-button-secondary"> 注册</A>
 
```

## 4 CSS[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS)

### 4.1 CSS样式规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules)

#### 4.1.1 CSS有效性[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS_Validity)

尽可能使用有效的CSS。

除非处理CSS验证程序错误或需要专有语法，否则请使用有效的CSS代码。

使用[W3C CSS验证器](https://jigsaw.w3.org/css-validator/)等工具 进行测试。

使用有效的CSS是一个可测量的基线质量属性，允许发现可能没有任何影响且可以删除的CSS代码，并确保正确的CSS使用。

#### 4.1.2 ID和类命名[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Naming)

使用有意义或通用的ID和类名。

而不是表示或神秘的名称，总是使用反映相关元素的目的的ID和类名，或者通用的。

应该首选具有特定名称并反映元素用途的名称，因为这些名称最容易理解且最不可能改变。

通用名称只是与其兄弟姐妹没有特定或没有任何意义的元素的后备。他们通常需要作为“帮助者”。

使用功能或通用名称可降低不必要的文档或模板更改的可能性。

```css
/ *不推荐：无意义* / ＃yee-1901 {} / *不推荐：presentational * / 。按钮- 绿色{} 。清除{}
/ *推荐：具体* / #gallery {} ＃login {} 。视频{} / *推荐：通用* / 。aux {} 。alt {}
```

#### 4.1.3 ID和类名称样式[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Style)

尽可能使用尽可能短的ID和类名称。

尝试尽可能简短地传达ID或类的内容。

使用ID和类名称可以提供可接受的可理解性和代码效率。

```css
/ *不推荐* / #navigation {} 。atr {}
/ *推荐* / #nav {} 。作者{}
```

#### 4.1.4类型选择器[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Type_Selectors)

避免使用类型选择器限定ID和类名。

除非必要（例如使用帮助程序类），否则不要将元素名称与ID或类结合使用。

出于[性能原因，](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)避免使用不必要的祖先选择器很有用。

```css
/ *不推荐* / 
ul #example {} 
div 。错误{}
/ *推荐* / #example {} 。错误{}
```

#### 4.1.5速记属性[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Shorthand_Properties)

尽可能使用速记属性。

CSS提供了各种[速记](https://www.w3.org/TR/CSS21/about.html#shorthand) 属性（如`font`），应尽可能使用，即使在只显式设置一个值的情况下也是如此。

使用速记属性对于代码效率和可理解性非常有用。

```css
/ *不推荐* / 
border - top - style ：none ; 
font - family ：palatino ，georgia ，serif ; 
font - size ：100 ％; 
线- 高度：1.6 ; 
填充- 底部：2em ; 
填充- 左：1em ; 
填充- 右：1em ; 
填充-     顶部：0 ; 
/ *推荐* / 
border - 顶部：0 ; 
字体：100 ％/ 1.6 palatino ，georgia ，serif ; 
填充：0 1em 2em ;     
```

#### 4.1.6 0和单位[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#0_and_Units)

除非需要，否则在“0”值后省略单位规格。

`0`除非需要，否则不要在值之后使用单位。

```css
flex ：0px ; / *这个基于flex的组件需要一个单元。* / 
flex ：1 1 0px ; / *没有单位没有歧义，但在IE11中需要。* / 
保证金：0 ; 
填充：0 ;        
```

#### 4.1.7领先0[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Leading_0s)

省略值中的前导“0”。

不要将`0`s放在-1和1之间的值或长度之前。

```css
font - size : . 8em ; 
```

#### 4.1.8十六进制表示法[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Hexadecimal_Notation)

尽可能使用3个字符的十六进制表示法。

对于允许它的颜色值，3个字符的十六进制表示法更短，更简洁。

```css
/ *不推荐* / 
color ：#eebbcc; 
/ *推荐* / 
颜色：#ebc; 
```

#### 4.1.9前缀[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Prefixes)

具有应用程序特定前缀的前缀选择器（可选）。

在大型项目以及嵌入其他项目或外部站点的代码中，使用ID和类名称的前缀（作为名称空间）。使用简短的唯一标识符，后跟破折号。

使用命名空间有助于防止命名冲突，并且可以使维护更容易，例如在搜索和替换操作中。

```css
。adw - help {} / * AdWords * / #maia-note {} / * Maia * / 
```

#### 4.1.10 ID和类名分隔符[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#ID_and_Class_Name_Delimiters)

用连字符分隔ID和类名中的单词。

除了连字符之外，不要通过任何字符（包括根本没有）连接选择器中的单词和缩写，以便提高理解和可扫描性。

```css
/ *不推荐：不会将单词“demo”和“image”* /分开。demoimage {} / *不推荐：使用下划线而不是连字符* / 。error_status {}
/ *推荐* / ＃video-id {} 。广告- 示例{}
```

#### 4.1.11黑客[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Hacks)

避免用户代理检测以及CSS“黑客攻击” - 首先采用不同的方法。

解决用户代理检测或特殊CSS过滤器，变通方法和黑客攻击时的样式差异很诱人。为了实现和维护高效且易于管理的代码库，这两种方法都应该被认为是最后的手段。换句话说，鉴于项目倾向于采取阻力最小的方式，从长远来看，给予检测和黑客免费通行证会损害项目。也就是说，允许并且使得易于使用检测和黑客手段更频繁且更频繁地使用检测和黑客手段太频繁。

### 4.2 CSS格式规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)

#### 4.2.1声明命令[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Declaration_Order)

按字母顺序排列的声明。

按字母顺序放置声明，以便以易于记忆和维护的方式实现一致的代码。

忽略特定于供应商的前缀以进行排序。但是，应该对某个CSS属性的多个特定于供应商的前缀进行排序（例如-moz前缀在-webkit之前）。

```css
背景：紫红色; 
边框：1px 固体; - moz - border - radius ：4px ; - webkit - border - radius ：4px ; 
border - radius ：4px ; 
颜色：黑色; 
text - align ：center ; 
text - indent ：2em ; 
 
   
```

#### 4.2.2阻止内容缩进[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Block_Content_Indentation)

缩进所有块内容。

缩进所有[块内容](https://www.w3.org/TR/CSS21/syndata.html#block)，即规则和声明中的规则，以反映层次结构并提高理解。

```css
@media screen ，projection { 
  html { 
    background ：#fff; 
    颜色：＃444; } }
  
  
```

#### 4.2.3声明停止[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Declaration_Stops)

每次声明后都使用分号。

出于一致性和可扩展性的原因，以分号结束每个声明。

```css
/ *不推荐* / 。test { 
  display ：block ; 
  身高：100px }
 
/ *推荐* / 。test { 
  display ：block ; 
  身高：100px ; }
 
```

#### 4.2.4属性名称停止[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Property_Name_Stops)

在属性名称的冒号后面使用空格。

出于一致性原因，始终在属性和值之间使用单个空格（但在属性和冒号之间没有空格）。

```css
/ *不推荐* / 
h3 { 
  font - weight ：bold ; }
/ *推荐* / 
h3 { 
  font - weight ：bold ; }
```

#### 4.2.5声明块分离[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Declaration_Block_Separation)

在最后一个选择器和声明块之间使用空格。

始终在最后一个选择器和开始[声明块的](https://www.w3.org/TR/CSS21/syndata.html#rule-sets)左大括号之间使用一个空格。

左大括号应与给定规则中的最后一个选择器位于同一行。

```css
/ *不推荐：缺少空格* / #video { 
  margin - top ：1em ; } / *不推荐：不必要的换行符* / #video { 
  margin - top ：1em ; }
 




 
/ *推荐* / #video { 
  margin - top ：1em ; }
 
```

#### 4.2.6选择器和声明分离[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Selector_and_Declaration_Separation)

用新行分隔选择器和声明。

始终为每个选择器和声明开始一个新行。

```css
/ *不推荐* / 
a ：焦点，a ：活跃{ 
  position ：relative ; 上：1px ; } 
/ *推荐* / 
h1 ，
h2 ，
h3 { 
  font - weight ：normal ; 
  线- 高度：1.2 ; } 
```

#### 4.2.7规则分离[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Rule_Separation)

按新线分开规则。

始终在规则之间放置一个空行（两个换行符）。

```css
html { 
  background ：#fff; } 
体{ 
  余量：汽车; 
  宽度：50 ％; } 

  
```

#### 4.2.8 CSS引号[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS_Quotation_Marks)

对属性选择器和属性值使用single（`''`）而不是double（`""`）引号。

不要在URI值（`url()`）中使用引号。

例外：如果确实需要使用`@charset`规则，请使用双引号 - 不允许使用[单引号](https://www.w3.org/TR/CSS21/syndata.html#charset)。

```css
/ *不推荐* / @import url （“https://www.google.com/css/maia.css” ）; 
html { 
  font - family ：“open sans” ，arial ，sans - serif ; }

 
/ *推荐* / @import URL （HTTPS ：//www.google.com/css/maia.css）; 
html { 
  font - family ：'open sans' ，arial ，sans - serif ; }

 
```

### 4.3 CSS元规则[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#CSS_Meta_Rules)

#### 4.3.1部分评论[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Section_Comments)

按部分注释（可选）对部分进行分组。

如果可能，请使用注释将样式表部分组合在一起。使用新行分隔部分。

```css
/ *标题* / ＃adw-header {} / *页脚* / ＃adw-footer {} / *图库* / 。adw - gallery {}
```

## 分手[![img](https://google.github.io/styleguide/include/link.png)](https://google.github.io/styleguide/htmlcssguide.html#Parting_Words)

*始终如一。*

如果您正在编辑代码，请花几分钟时间查看您周围的代码并确定其样式。如果他们在所有算术运算符周围使用空格，你也应该这样做。如果他们的评论周围几乎没有哈希标记，那么让你的评论周围几乎没有哈希标记。

拥有风格指南的关键是要有一个共同的编码词汇表，这样人们就可以专注于你所说的内容而不是你说的方式。我们在这里介绍全球风格规则，以便人们了解词汇，但本地风格也很重要。如果你添加到文件中的代码看起来与它周围的现有代码截然不同，那么当它们去阅读它时会使读者失去节奏。避免这样做。