//for in
//used for iterate objects without Symbol.Iterator

var person = {
  name: 'William',
  gender: 'male'
}

for(var attribute in person){
  console.log(attribute +': '+person[attribute]);
}
