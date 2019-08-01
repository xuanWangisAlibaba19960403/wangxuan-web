import { defineReactive, def, isObject, hasOwn } from '../utils.js';
import { arrayMethods } from '../array.js';
import Dep from './Dep.js';

const hasProto = '__proto__' in {};
const arrayKeys = Object.getOwnPropertyDescriptor(arrayMethods);

class Observer { // 递归每一个属性 全部添加上侦测
  constructor(value) {
    this.value = value;
    this.dep = new Dep(); // 新增
    def(value, '__ob__', this);

    if (Array.isArray(value)) {
      // 修改
      // const argument = hasProto ? protoAugement : copyAugment;
      // argument(value, arrayMethods, arrayKeys)
      // value.__proto__ = arrayMethods // 对数组的执行进行拦截
      this.observerArrya(value)
    } else {
      this.walk(value);
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  }

  observerArrya(items) {
    for (let i = 0; i < items.length; i++) {
      observer(items[i]);
    }
  }
}

export default function observer(value, arRootData) {
  if (!isObject(value)) {
    return;
  }
  let ob = null;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value)
  }
  return ob;
}

function protoAugement(target, src, keys) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    def(target, key, src[key])
  }
}
