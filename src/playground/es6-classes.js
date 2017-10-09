class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi, my name is ${this.name} and i am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, path) {
        super(name, age)
        this.path = path;
    }
}

const me = new Student('Jesus', 30, 'frontend');
console.log(me.name);