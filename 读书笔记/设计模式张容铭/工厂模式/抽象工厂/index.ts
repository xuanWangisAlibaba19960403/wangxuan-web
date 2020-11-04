abstract class Car {
    public constructor() {
    }

    public abstract getPrice(): number;

    public abstract getSpeed(): number;
}

var VehicleFactory = function (subType: Function, superType: string) {
    if (typeof VehicleFactory[superType] === 'function') {
        function F() { };
        F.prototype = new VehicleFactory[superType]();
        subType.prototype = new F();
        subType.constructor = subType;
    } else {
        throw new Error('未创建该抽象类');
    }
}

// 小汽车抽象类
VehicleFactory['Car'] = function () {
    this.type = 'car';
}

VehicleFactory['Car'].prototye = {
    constructor: VehicleFactory['Car'],

    getPrice() {
        return new Error('抽象方法不能调用')
    },

    getSpeed() {
        return new Error('抽象方法不能调用')
    }
}

// 公交车抽象类
VehicleFactory['Bus'] = function () {
    this.type = 'bus';
}

VehicleFactory['Bus'].prototye = {
    constructor: VehicleFactory['Bus'],

    getPrice() {
        return new Error('抽象方法不能调用')
    },

    getSpeed() {
        return new Error('抽象方法不能调用')
    }
}


// 货车抽象类
VehicleFactory['Truck'] = function () {
    this.type = 'truck';
}

VehicleFactory['Truck'].prototye = {
    constructor: VehicleFactory['Truck'],

    getPrice() {
        return new Error('抽象方法不能调用')
    },

    getSpeed() {
        return new Error('抽象方法不能调用')
    }
}

class BMW {
    public price: number;
    public speed: number;
    public getPrice: Function;
    public getSpeed: Function;
    public constructor(price: number, speed: number) {
        this.price = price;
        this.speed = speed;
    }
}

BMW.prototype.getPrice = function () {
    return this.price;
}

BMW.prototype.getSpeed = function () {
    return this.speed;
}


VehicleFactory(BMW, 'Car');

class Lamborghini {
    public price: number;
    public speed: number;
    public constructor(price: number, speed: number) {
        this.price = price;
        this.speed = speed;
    }

    getPrice() {
        return this.price;
    }

    getSpeed() {
        return this.speed;
    }
}

class YUTONG {
    public price: number;
    public passenger: number;
    public getPrice: Function;
    public getPassengerNum: Function;
    public constructor(price: number, passenger: number) {
        this.price = price;
        this.passenger = passenger;
    }
}

YUTONG.prototype.getPrice = function () {
    return this.price;
}

YUTONG.prototype.getPassengerNum = function () {
    return this.passenger;
}

VehicleFactory(YUTONG, 'Bus');

class BenzTruck {
    public price: number;
    public trainLoad;
    public getPrice: Function;
    public getTrainLoad: Function;
    constructor(price: number, trainLoad) {
        this.price = price;
        this.trainLoad = trainLoad;
    }
}

VehicleFactory(BenzTruck, 'Truck');

BenzTruck.prototype.getPrice = function () {
    return this.price;
}

BenzTruck.prototype.getTrainLoad = function () {
    return this.price;
}

