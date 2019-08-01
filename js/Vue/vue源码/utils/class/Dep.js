let uid = 0; // 新增
export default class Dep {
  constructor() {
    this.id = uid++; // 新增
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    const index = this.subs.indexOf(sub);
    if (index > -1) {
      return this.subs.splice(index, 1)
    }
  }

  depend() {
    if (window.target) {
      // this.addSub(window.target); // 废弃
      window.target.addSub(this); // 新增
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

// function remove(arr, item) {
//   if (arr.length) {
//     const index = arr.indexOf(item);
//     if (index < -1) {
//       return arr.splice(index, 1);
//     }
//   }
// }
