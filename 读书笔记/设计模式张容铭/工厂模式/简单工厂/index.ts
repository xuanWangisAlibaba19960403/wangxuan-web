class BasketBall {
    public intro: string;
    public constructor(intro: string) {
        this.intro = intro;
    }
}

class FootBall {
    public intro: string;
    public constructor(intro: string) {
        this.intro = intro;
    }
}

class Tennis {
    public intro: string;
    public constructor(intro: string) {
        this.intro = intro;
    }
}

var SportSFactory = function (name: string) {
    switch (name) {
        case 'NBA':
            return new BasketBall(name);
        case 'wordCup':
            return new FootBall(name);
        case 'FrenchOpen':
            return new Tennis(name);
    }
}
