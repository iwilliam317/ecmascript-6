const attributes = new WeakMap();

class Animal {
  
  constructor(name, age){
    attributes.set(this, {name, age})
  }
  
  getAttribute(attribute){
    return attributes.get(this)[attribute]
  }
  
}

class Rabbit extends Animal {
  constructor(name, age, owner){
    super(name, age)
    attributes.set(this, {name, age, owner})
  }
}

let chapo = new Rabbit("chapo", 3, "william");
console.log(chapo.getAttribute("name"))