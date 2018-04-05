const backend = {
  amount: 2,
  members: ["william", "gabriel"],
  [Symbol.iterator]: function* (){
    yield this.members;
  }
}

const frontend = {
  amount:1,
  members: ["jefferson"],
  [Symbol.iterator]: function* (){
    yield this.members;
  }
}


const team = {
  backend,
  frontend,
  [Symbol.iterator]: function* (){
    yield* backend;
    yield* frontend;
  }
}


for(let m of team){
  console.log(m)
}