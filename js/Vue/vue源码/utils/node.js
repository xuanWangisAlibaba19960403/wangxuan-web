/*
    <p>静态节点</p>
{
    type: 1,
    tag: 'p',
    staticRoot: false,
    static: true,
    ...
}
*/

/*
    <ul>静态根节点
        <li></li>
        <li></li>
        <li></li>
    </ul>
*/


/*
    <div id="el">Hello {{name}}</div>
    {
      type: 1,
      tag: 'div',
      attrsList: [
          {
              'name': 'id,
              'value': 'el',
          }
      ],
      attrsMap: {
        'id': 'el'
      },
      children: [
        {
          type: 2,
          expression: '"Hello " + _s(name)',
          text: 'Hello {{name}}',
        }
      ],
      plain: false,
      attrs: [
        {
          name: 'id',
          value: 'el
        }
      ]
    }
    经过优化器的优化之后， AST是下面这样
    {
      type: 1,
      tag: 'div',
      attrsList: [
        {
            'name': 'id,
            'value': 'el',
        }
      ],
      attrsMap: {
        'id': 'el'
      },
      children: [
        {
          type: 2,
          expression: '"Hello " + _s(name)',
          text: 'Hello {{name}}',
          static: false,
        }
      ],
      plain: false,
      attrs: [
        {
          name: 'id',
          value: 'el
        }
      ],
      static: false,
      staticRoot: false
    }
*/

export function optimize(root) {
  if (!root) {
    return;
  }
  markStatic(root);
  markStaticRoots(root);
}

function markStatic(node) { // 递归操作
  node.static = isStatic(node);
  if (node.type === 1) {
    for (let i = 0, l = node.children.length; i < l; i++) {
      const child = node.children[i];
      markStatic(child);
    }
  }
}

function isStatic(node) {
  if (node.type === 2) {
    return false;
  }
  
  if (node.type === 3) {
    return true;
  }

  return !!(node.pre || (
    !node.hasBindings && // 没有动态绑定
  ))
}