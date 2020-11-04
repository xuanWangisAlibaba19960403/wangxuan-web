import Dep from './class/Dep.js';
import Observer from './class/Observer.js';
(function (window) {
  var bailRE = /[^\w.$]/;

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  methodsToPatch.forEach(function (method) {
    var original = arrayProto[method];
    Object.defineProperty(arrayMethods, method, {
      value: function mutator(...args) {
        return original.apply(this, args);
      },
      enumerable: true,
      writable: true,
      configurable: true
    })
  })

  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) return;
        obj = obj[segments[i]];
      }
      return obj;
    }
  }
  /**
   * Remove an item from an array.
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  function defineReactive(data, key, val) {
    // 新增 递归属性
    if (typeof val === 'object') {
      new Observer(val);
    }
    var dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        dep.depend();
        return val;
      },
      set(newVal) {
        console.log(newVal);
        if (val === newVal) {
          return;
        }
        val = newVal;
        dep.notify();
      }
    });
  }
  window.defineReactive = defineReactive;
})(window);
