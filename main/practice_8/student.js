import Person from "./person.js";

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

module.exports = Student;
