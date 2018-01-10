var numbers = [1,2,3,4];
var double = numbers.map(function(number){
  return number*2;
});

console.log(double)


var names = ['William', 'Juliano'];
var concatenateNames = names.map(function(name){
  return 'Mister '+name;
});

console.log(concatenateNames)