import Watch from './Watcher.js';
import { set } from './Observer/index.js';

class Vue {
  constructor() {

  }
}

Vue.prototype.$watch = function (expOrFn, cb, options) {
  const vm = this;
  options = options || {};
  const watch = new Watch(vm, expOrFn, cb, options);
  if (options.immediate) {
    cb.call(vm, watch.value);
  }
  return function unwatchFn() {
    watch.teardown();
  }
}

Vue.prototype.$set = set;

