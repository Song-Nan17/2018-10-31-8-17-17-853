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
    console.log("It is not one of us.");
  }
  appendMember(student) {
    student.klass = this;
  }
  isIn(student) {
    if (student.klass === this) {
      return true;
    }
    return false;
  }
}

module.exports = Class;


