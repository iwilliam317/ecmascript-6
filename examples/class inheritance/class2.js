//ES5
// function Animal(name, gender){
//   this.name = name;
//   this.gender = gender;
// }

// Animal.prototype.walk = function(){
//   console.log(`${this.name} is walking...`);
// }

// tsuki = new Animal("tsuki", "female")
// tsuki.walk();


//ES6
class Animal{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
  
  walk(){
    console.log(`${this.name} is walking...`);
  }
}


tsuki = new Animal("tsuki", "female")
tsuki.walk();