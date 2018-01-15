// getting the avery age 

var people = [
  { name: 'Felipe', age: 20 },
  {  name: 'Bruno', age: 18 }
  ];
  

var sumAges = people.reduce(function(e, person){
    return e + person.age;
}, 0);

var amountPeople = people.length;
console.log('Avery age: '+ sumAges/amountPeople);