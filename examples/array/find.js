//find gets the first occurance of the condition

var people = [
  { name: 'Felipe', age: 20 },
  { name: 'Adriano', age: 32 },
  {  name: 'Bruno', age: 18 }
  ];
  


var overAge = people.find(function(person){
  return person.age > 18;
})

 
console.log(overAge)