import { parsePath, isObject } from '../utils.js'
export default class Wathcer {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm;

    if (options.deep) {
      this.deep = !!options.deep;
    } else {
      this.deep = false;
    }

    this.deps = []; // 新增
    this.depIds = new Set(); // 新增
    // 执行 this.getter() 就可以读取data.a.b.c的内容
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn
    } else {
      this.getter = parsePath(expOrFn);
    }
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    window.target = this;
    console.log(window.target)
    let value = this.getters.call(this.vm, this.vm);
    if (this.deep) {
      traverse(value);
    }
    window.target = undefined;
    return value;
  }

  updated() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }

  addDep(dep) {
    // 收集依赖dep
    const id = dep.id;
    if (!this.depIds.has(id)) {
      this.depIds.push(id);
      this.deps.push(dep);
      dep.addSub(this) // 传入的是一个dep的实例
    }
  }

  teardown() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this)
    }
  }
}

const seenObjects = new Set();

export function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}

