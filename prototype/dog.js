class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

// const dog1 = new Dog("Daisy");
// const dog2 = new Dog("Max");
// const dog3 = new Dog("Spot");

// console.log(JSON.stringify(Dog.prototype, null, 2));
// // constructor: ƒ Dog(name, breed) bark: ƒ bark()

// console.log(dog1.__proto__);
// // constructor: ƒ Dog(name, breed) bark: ƒ bark()

// Dog.prototype.play = () => console.log("Playing now!");

// dog1.play();

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return "Flying!";
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();

const dog = {
  bark() {
    console.log(`Woof!`);
  },
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
