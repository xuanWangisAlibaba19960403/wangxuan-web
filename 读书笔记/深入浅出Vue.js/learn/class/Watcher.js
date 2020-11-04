export default class Wathcher {
    constructor(vm, expOrfn, cb) {
        this.vm = vm;
        this.getter = parsePath(expOrfn);
        this.cb = cb;
        this.value = this.get();
    }

    get() {
        window.target = this;
        let value = this.getter.call(this.vm, this.vm);
        window.target = undefined;
        return value;
    }

    update() {
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm, this.value, oldValue);
    }
}