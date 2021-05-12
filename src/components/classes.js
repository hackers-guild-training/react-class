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
  communicate() {
    console.log("Hello");
  }
  changeName(newName) {
    this.name = newName;
  }
}

// instatiation of object
let dog = new Animal("brown", "bill", "fur");
let snake = new Animal("silver gray", "cobra", "scales");

console.log(dog.name);
dog.changeName("jerry");
console.log(dog.name);
// static properties and methods
// inheritance
// this keyword
