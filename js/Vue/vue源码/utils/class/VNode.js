export default class VNode {
  constructor(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined; // ?
    this.context = context;
    this.functionalContext = undefined;
    this.functionalOptions = undefined;
    this.functionalScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  }

  get child() {
    return this.componentInstance;
  }
}

// 注释节点
export const createEmptyVNode = text => {
  const node = new VNode()
  node.text = text;
  node.isComment = true;
  return node;
}

// 文本节点
export function createTextVNode(val) {
  return new  VNode(undefined, undefined, undefined, String(val));
}


export function cloneVNode(vnode, deep) {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.childrem  = cloneVNode(vnode.children);
  }
  return cloned;
}

function removeVnodes(vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; startIdx++) {
    const ch = vnodes[startIdx];
    if (isDef(ch)) {
      removeVnode(ch.elm);
    }
  }
}

const nodeOps = {
  removeChild(node, child) {
    node.removeChild(child);
  }
}

function removeVnode(el) {
  const parent = nodeOps.parentNode(el);
  if (isDef(parent)) {
    nodeOps.removeChild(parent, el);
  }
}
