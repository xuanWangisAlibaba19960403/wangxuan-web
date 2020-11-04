var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var VehicleFactory = function (subType, superType) {
    if (typeof VehicleFactory[superType] === 'function') {
        function F() { }
        ;
        F.prototype = new VehicleFactory[superType]();
        subType.prototype = new F();
        subType.constructor = subType;
    }
    else {
        throw new Error('未创建该抽象类');
    }
};
// 小汽车抽象类
VehicleFactory['Car'] = function () {
    this.type = 'car';
};
VehicleFactory['Car'].prototye = {
    constructor: VehicleFactory['Car'],
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
};
// 公交车抽象类
VehicleFactory['Bus'] = function () {
    this.type = 'bus';
};
VehicleFactory['Bus'].prototye = {
    constructor: VehicleFactory['Bus'],
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
};
// 货车抽象类
VehicleFactory['Truck'] = function () {
    this.type = 'truck';
};
VehicleFactory['Truck'].prototye = {
    constructor: VehicleFactory['Truck'],
    getPrice: function () {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用');
    }
};
var BMW = /** @class */ (function () {
    function BMW(price, speed) {
        this.price = price;
        this.speed = speed;
    }
    return BMW;
}());
BMW.prototype.getPrice = function () {
    return this.price;
};
BMW.prototype.getSpeed = function () {
    return this.speed;
};
VehicleFactory(BMW, 'Car');
var Lamborghini = /** @class */ (function () {
    function Lamborghini(price, speed) {
        this.price = price;
        this.speed = speed;
    }
    Lamborghini.prototype.getPrice = function () {
        return this.price;
    };
    Lamborghini.prototype.getSpeed = function () {
        return this.speed;
    };
    return Lamborghini;
}());
var YUTONG = /** @class */ (function () {
    function YUTONG(price, passenger) {
        this.price = price;
        this.passenger = passenger;
    }
    return YUTONG;
}());
YUTONG.prototype.getPrice = function () {
    return this.price;
};
YUTONG.prototype.getPassengerNum = function () {
    return this.passenger;
};
VehicleFactory(YUTONG, 'Bus');
var BenzTruck = /** @class */ (function () {
    function BenzTruck(price, trainLoad) {
        this.price = price;
        this.trainLoad = trainLoad;
    }
    return BenzTruck;
}());
VehicleFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function () {
    return this.price;
};
BenzTruck.prototype.getTrainLoad = function () {
    return this.price;
};
