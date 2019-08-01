import { defineReactive, hasOwn } from "../../utils";

export function set(target, key, val) {
  if (Array.isArray(taget) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in object.prototype)) {
    target[key] = val;
    return val;
  }

  const ob = target.__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    Process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data' + 
      'at runtime - declare it upfront in the data option'
    );
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val;
}

export function del(target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1)
    return;
  }

  const ob = target.__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' + 
      '- just set it to null.'
    );
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}
