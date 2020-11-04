var Factory = function (type, content) {
    if (this instanceof Factory) {
        return new this[type](content);
    } else {
        return new Factory(type, content);
    }
}