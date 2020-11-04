var LazySingle = (function () {
    var _instance = null;
    function Single() {
        return {
            publicMethod: function () { },
            publicProperty: '1.0'
        };
    }
    return function () {
        if (_instance) {
            return _instance;
        }
        return _instance = Single();
    };
})();
