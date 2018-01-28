var people = [
  {name: 'Juliano', age: 28},
  {name: 'Ingrid' ,  age: 16},
  {name: 'Reinaldo', age: 17},
  {name: 'Renata' , age: 23}
  ]
var underAge = [];

//using forEach
//people.forEach(function(person){
//  if(person.age < 18){
//    underAge.push(person);
//  }
//})


//using filter
underAge = people.filter(function(person){
  return person.name < 18;
})
console.log(underAge)