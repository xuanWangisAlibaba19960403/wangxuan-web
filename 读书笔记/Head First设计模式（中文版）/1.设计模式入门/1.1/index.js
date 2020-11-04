var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.display = function () {
        console.log('display');
    };
    Duck.prototype.quack = function () {
        console.log('quack');
    };
    Duck.prototype.fly = function () {
        console.log('fly');
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super.call(this) || this;
    }
    return MallardDuck;
}(Duck));
// 橡皮鸭
var SimUDuck = /** @class */ (function (_super) {
    __extends(SimUDuck, _super);
    function SimUDuck() {
        return _super.call(this) || this;
    }
    SimUDuck.prototype.fly = function () {
        // 橡皮鸭子不会飞 重写橡皮鸭方法
    };
    return SimUDuck;
}(Duck));
console.log(new SimUDuck().fly());
// 木头鸭
var WoodenDuck = /** @class */ (function (_super) {
    __extends(WoodenDuck, _super);
    function WoodenDuck() {
        return _super.call(this) || this;
    }
    WoodenDuck.prototype.fly = function () {
        // 木头鸭子不会飞 重写木头鸭方法
    };
    WoodenDuck.prototype.quack = function () {
        // 木头鸭子不会刮刮叫 重写木头鸭方法
    };
    return WoodenDuck;
}(Duck));
