// Blueprint / plan house aka class

// Animal
/*
properties (data)
- color
- texture 
Behavior  (methods)
- feeding 
- mate 
- moving 
- communicate 
*/

// constructor function
// function Animal(color, texture) {
//   this.color = color;
//   this.texture = texture;
// }

// const dog = new Animal("brown", "fur");

// console.log(dog.color);

class Animal {
  // Proprties
  color = "";
  name = "";
  texture = "";
  static race = "mandalorian";

  // Methods
  constructor(color, name, texture) {
    this.color = color;
    this.name = name;
    this.texture = texture;
  }

  feed() {
    console.log("feeding");
  }
  move() {
    console.log("walking");
  }
  communicate(language) {
    console.log(language);
  }
  changeName(newName) {
    this.name = newName;
  }
}

class Dog extends Animal {
  bark() {
    // this.communicate("woof");
  }
}

console.log(Animal.race);

// instatiation of object
let dog = new Dog("brown", "bill", "fur");
let snake = new Animal("silver gray", "cobra", "scales");

console.log(dog.name);
dog.changeName("jerry");
// console.log(dog.bark());
// static properties and methods
// inheritance
// this keyword

const ob = {
  uName: "joe",
  printName: function () {
    console.log(this.name);
  },
};

ob.printName();
//super

// class NavBar extends React.Component {}

// Backend
