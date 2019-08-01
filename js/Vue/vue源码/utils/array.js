import { def } from '../utils.js';
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    const result =  original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observerArray(inserted); //新增的元素添加响应
    ob.dep.notify(); // 向依赖发送消息 触发更新
    return result;
  })
})