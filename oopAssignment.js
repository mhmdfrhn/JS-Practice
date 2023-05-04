class Animal {
  constructor(name, age, isMammal) {
    this.name = name;

    this.age = age;

    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age, isMammal = true) {
    super(name, age, isMammal);
  }
  eat() {
    console.log(`${this.name} sedang makan!`);
  }
}

class Eagle extends Animal {
  constructor(name, age, isMammal = false) {
    super(name, age, isMammal);
  }
  fly() {
    console.log(`${this.name} sedang terbang!`);
  }
}

const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit);
const myEagle = new Eagle("Elo", 4);

myRabbit.eat();

myEagle.fly();
