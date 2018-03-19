class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}
class Car extends Vehicle {
}

let car = new Car('Tesla', 'SUV');
console.log(car.getName()); 
console.log(car.getType()); 