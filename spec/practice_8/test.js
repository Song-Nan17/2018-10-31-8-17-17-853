class Person {
  constructor(id, name, age) {
    this.introduce.id = id;
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    // if()
    return `${super.introduce()} I am a Student. I am at ${this.klass.getDisplayName()}.`;
  }
}

class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (this.number === student.klass.number) {
    this.leader = student;
    }
  }
}

const klass = new Class(2);
const student = new Student(1, "Jerry", 21, klass);

klass.assignLeader(student);

console.log(klass.leader);