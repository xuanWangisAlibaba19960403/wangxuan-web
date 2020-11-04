var Count = (function () {
    var _img = new Image();
    return function (params) {
        var url = 'http://www.count.com/a.gif?';

        for (var param in params) {
            url += `${param}=${params[param]}`
        }
        _img.src = url;
    }
})();
Count({ num: 10 })