class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major='undecided') {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (!!this.homeLocation) {
            greeting = greeting + ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Anirudh Jain',17,'Computer Science');
console.log(me);
console.log(me.getDescription());

const traveler = new Traveler('James McLee', 21, 'San Francisco');
console.log(traveler.getGreeting());

const other = new Person();
console.log(other);
console.log(other.getDescription());