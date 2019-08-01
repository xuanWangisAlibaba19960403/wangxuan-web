import Dep from "../utils/class/Dep.js";
import observer from "../utils/class/Observer.js";

const bailRE = /[^\w.$]/;

export function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }
      obj = obj[segments[i]];
    }
    return obj;
  }
}

export function defineReactive(data, key, val) {
  // 新增，递归子属性

  let childOb = observer(val); // 单例模式？
  // 这样写dep有些耦合 所以我门把dep封装成一个类
  // let dep = []
  let dep = new Dep(); // 依赖
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // dep.push(window.target)
      // watch自动把依赖加到dep中
      // dep.addSub(window.target)
      dep.depend();
      // 这里收集Array的依赖
      if (childOb) {
        childOb.dep.depend();
      }
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      // for (let i = 0; i < dep.length; i++) {
      //   dep[i](newVal, val)
      // }
      dep.notify();
      val = newVal;
    }
  })
}

export function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

export function isObject(obj) {
  return typeof obj === 'object';
}


function hasOwn(obj, prop) {
  return obj.hasOwnProperty(prop);
}
