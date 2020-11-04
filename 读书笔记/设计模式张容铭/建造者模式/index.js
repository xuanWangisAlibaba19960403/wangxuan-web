var Human = /** @class */ (function () {
    function Human(skill, hobby) {
        this.skill = skill;
        this.hobby = hobby;
    }
    Human.prototype.getSkill = function () {
        return this.skill;
    };
    Human.prototype.getHobby = function () {
        return this.hobby;
    };
    return Human;
}());
var Named = /** @class */ (function () {
    function Named(name) {
        this.name = name;
    }
    Object.defineProperty(Named.prototype, "firstName", {
        get: function () {
            return this.name.slice(0, this.name.indexOf(' '));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Named.prototype, "secondName", {
        get: function () {
            return this.name.slice(this.name.indexOf(' '));
        },
        enumerable: false,
        configurable: true
    });
    return Named;
}());
var Work = /** @class */ (function () {
    function Work(workCode) {
        var _a = Work.switchParameter(workCode), work = _a[0], workDescript = _a[1];
        this.workDescript = work;
        this.workDescript = workDescript;
    }
    Work.switchParameter = function (work) {
        switch (work) {
            case 'code':
                return ['工程师', '每天沉醉于编程'];
            case 'ui':
            case 'ue':
                return ['设计师', '设计更似一种艺术'];
        }
    };
    Work.prototype.changeWork = function (work) {
        this.work = work;
    };
    Work.prototype.changeDescript = function (setence) {
        this.workDescript = setence;
    };
    return Work;
}());
