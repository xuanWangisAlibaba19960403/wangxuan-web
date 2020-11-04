export default class Dep {
    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    removeSub(sub) {
        remove(this.subs, sub);
    }

    depend() {
        if (window.target) {
            console.log('depend');
            this.addSub(window.target);
        }
    }

    notify() {
        console.log('执行');
        const subs = this.subs.slice();
        for (let sub of subs) {
            sub.update();
        }
    }
}