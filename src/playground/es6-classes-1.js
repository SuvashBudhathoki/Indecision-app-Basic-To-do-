class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      return (description += ` Their major is ${this.major}.`);
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      return (greeting += ` Your home location is ${this.homeLocation}`);
    }
  }
}

const me = new Student("Suvash Budhathoki", 30, "Information Systems");

console.log(me.getDescription());
const other = new Student();
console.log(other.getGreeting());

const trav = new Traveler("Alisha Budhathoki", 30, "Hawaii");
console.log(trav.getGreeting());
