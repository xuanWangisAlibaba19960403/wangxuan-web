// 外观模式实现
function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, { passive: true });
    }
    else {
        dom["on" + type] = fn;
    }
}
