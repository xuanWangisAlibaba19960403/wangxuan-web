Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    context = context || window;
    if (typeof context !== 'object') {
        context = window;
    }
    context.fn = this;
    const result = context.fn(...args)
    delete context.fn
    return result;
}

Function.prototype.myApply = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    context = context || window;
    if (typeof context !== 'object') {
        context = window;
    }
    context.fn = this;
    const result = context.fn(args)
    delete context.fn
    return result;
}


Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Error');
    }
    const _this = this;
    context = context || window;
    if (typeof context !== 'object') {
        context = window;
    }
    return function F(...otherArgs) {
        if (this instanceof F) {
            return new _this(...args, ...otherArgs);
        }
        return _this.apply(context, args.concat(otherArgs));
    }
}