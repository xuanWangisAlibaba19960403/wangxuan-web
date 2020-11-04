// 外观模式实现
function addEvent(dom, type: string, fn: Function) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, { passive: true });
    } else {
        dom[`on${type}`] = fn;
    }
}