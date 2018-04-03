//protecting attributes using weakmap
const attributes = new WeakMap();

class Animal {
  
  constructor(name){
    // this.name = name;
    attributes.set(this, {name})
  }
  
  getName(){
    return attributes.get(this)["name"];
  }
  

}

let myDog = new Animal("tsuki");
console.log(myDog.name);
console.log(myDog.getName());