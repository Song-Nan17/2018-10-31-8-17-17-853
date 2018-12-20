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

module.exports = Person;

