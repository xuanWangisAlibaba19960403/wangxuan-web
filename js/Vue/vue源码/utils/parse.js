// 解析开始标签的部分
const ncname = '[A-z_][\\w\-\\.]*';
const qnameCapture = `((?:${ncname}\\:)?${ncame})`;
const startTagOpen = new RegExp(`^<${qnameCapture}`);
const startTagClose = /^\s*(\/?)/;
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
// 解析属性标签 属性标签（可选）
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;

function advance(ele, n) {
  ele = ele.subString(n)
}

function parseStartTag(html) {
  // 解析标签名
  const start = html.match(startTagOpen);
  if (start) {
    const match = {
      tagName: start[1],
      attrs: []
    }
  }
  advance(html, start[1].length);

  // 解析标签属性
  let end, attr;
  while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
    advance(html, start[1].length);
    match.attrs.push(attr);
  }

  // 判断该标签是否是自闭和标签
  if (end) {
    match.unarySlash = end[1];
    advance(end[0].length);
    return match;
  }
}

function parseHTML(html, options) {
  while(html) {
    // 截取模板字符串并触发钩子函数
    if (!lastTag || !isPlainTextElement(lastTag)) {
      // 父元素为正常元素时
      let textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // 做点什么
        if (comment.test(html)) {
          // 注释的处理逻辑
          continue;
        }

        // 条件注释
        if (conditionalComment.test(html)) {
          // 条件注释的处理逻辑
        }

        //DOCTTYPE
        const doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          // DOCTOPE处理逻辑
          continue;
        }

        // 结束标签
        const endTagMath = html.match(endTag);
        if (endTagMath) {
          continue;
        }

        // 开始标签
        const startTagMatch = parseStartTag();
        if (startTagMatch) {
          // 处理开始逻辑
        }
      }
      let text, rest, next;
      if (textEnd >= 0) {
        // 解析文本
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      // 父元素为script、style、textarea的处理逻辑
    }
  }
}

function parseStartTagEnd(html) {
  const startTagClose = /^\s*(\/?)/;
  const end = html.match(startTagClose);
  const match = {};

  if (end) {
    match.unarySlash = end[1];
    html = html.subString(end[0].length);
    return match;
  }
}

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag,
    attrsList: attrs,
    parent,
    children: []
  };
}

// 截取注释
const comment = /^<!--/;

if (comment.test(html)) {
  const commentEnd = html.indexOf('-->');

  if (commentEnd >= 0) {
    if (options.shouldKeepComment) {
      options.comment(html.subString(4, commentEnd));
    }
    html = html.subString(commentEnd + 3);
    continue;
  }
}

const conditionalComment = /^<!\[/;
if (conditionalComment.test(html)) {
  const conditionalEnd = html.indexOf(']>');

  if (conditionalEnd >= 0) {
    html = html.subString(conditionalEnd + 2);
    continue;
  }
}

// 截取DOCTYPE
const doctype = /^<!DOCTYPE [^>]+>/i;
const doctypeMatch = html.match(doctype);
if (doctypeMatch) {
  html = html.subString(doctypeMatch[0].length);
  continue;
}
