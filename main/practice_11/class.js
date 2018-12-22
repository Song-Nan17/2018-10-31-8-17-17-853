class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  assignLeader(student) {
    if (this === student.klass) {
      this.leader = student;
      if (this.leaderListener) {
        console.log(`I am ${this.leaderListener.name}. I know ${student.name} become Leader of ${this.getDisplayName()}.`);
      }
    }
    console.log("It is not one of us.");
  }
  registerAssignLeaderListener(teacher) {
    this.leaderListener = teacher;
  }
  appendMember(student) {
    student.klass = this;
    if (this.joinListener) {
      console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined ${this.getDisplayName()}.`);
    }
  }
  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
  isIn(student) {
    if (student.klass === this) {
      return true;
    }
    return false;
  }
}

module.exports = Class;


