export default class Wathcer {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    // 执行 this.getter() 就可以读取data.a.b.c的内容
    this.getters = parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }

  get() {
    window.target = this
    let value = this.getters.call(this.vm, this.vm)
    window.target = undefined
    return value
  }

  updated() {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}