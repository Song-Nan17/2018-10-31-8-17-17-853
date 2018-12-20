import Person from "./person.js";

class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  introduce() {
    if (!this.klasses) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    let klassesNumber = this.klasses.map(klass => klass.number);
    return `${super.introduce()} I am a Teacher. I teach Class ${klassesNumber.join(', ')}.`;
  }
}

module.exports = Teacher;


