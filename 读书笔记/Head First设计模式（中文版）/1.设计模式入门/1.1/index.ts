class Duck {
    public constructor() {

    }

    display() {
        console.log('display');
    }

    quack() {
        console.log('quack');
    }

    fly() {
        console.log('fly');
    }
}


class MallardDuck extends Duck {
    public constructor() {
        super();
    }
}

// 橡皮鸭
class SimUDuck extends Duck {
    public constructor() {
        super();
    }

    fly() {
        // 橡皮鸭子不会飞 重写橡皮鸭方法
    }
}

// 木头鸭
class WoodenDuck extends Duck {
    public constructor() {
        super();
    }

    fly() {
        // 木头鸭子不会飞 重写木头鸭方法
    }

    quack() {
        // 木头鸭子不会刮刮叫 重写木头鸭方法
    }
}