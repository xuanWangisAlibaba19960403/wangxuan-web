class Human {
    public skill;
    public hobby;
    constructor(skill, hobby) {
        this.skill = skill;
        this.hobby = hobby;
    }

    getSkill() {
        return this.skill;
    }

    getHobby() {
        return this.hobby;
    }
}

class Named {
    public name;
    constructor(name) {
        this.name = name;
    }

    get firstName() {
        return this.name.slice(0, this.name.indexOf(' '));
    }

    get secondName() {
        return this.name.slice(this.name.indexOf(' '));
    }
}


class Work {
    public work;
    public workDescript;
    constructor(workCode: string) {
        const [work, workDescript] = Work.switchParameter(workCode);
        this.workDescript = work;
        this.workDescript = workDescript;
    }

    static switchParameter(work: string) {
        switch (work) {
            case 'code':
                return ['工程师', '每天沉醉于编程'];
            case 'ui':
            case 'ue':
                return ['设计师', '设计更似一种艺术'];
        }
    }

    changeWork(work) {
        this.work = work;
    }

    changeDescript(setence) {
        this.workDescript = setence;
    }
}

