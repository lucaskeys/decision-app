class Person {
  constructor(name = 'Anonymous', age = 0, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  getGreeting() {
    return `Hello, my name is ${this.name}.`;
  }


  getDescription() {
    return `This person is ${this.age} years old.`;
  }
}

class Student extends Person {
  // declare properties in constructor, but dont define them like above i.e: (this.name)
  constructor(name, age, major = 'Undecided')  {
    super(name, age);
    this.major = major;
  }


  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, occupation, homeLocation = 'From Around Here') {
    super(name, age, occupation);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation) {
      greeting += ` I am from ${this.homeLocation}.`;
    }
    return greeting;
  }

}


const traveller1 = new Traveler('luke', 29, 'Programmer', '');
console.log(traveller1.getGreeting());
