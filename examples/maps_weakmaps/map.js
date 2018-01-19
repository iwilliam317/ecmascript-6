//maps 

var map = new Map();

var string = ''
var foo = function(){}
var object = {};

//set
map.set(string, 'I accept a string');
map.set(foo, 'I accept a function');
map.set(object, 'I accept an object');
console.log('-------------');

//get
console.log(map.get(string));
console.log(map.get(foo));
console.log(map.get(object));
console.log('-------------');

//size
console.log('Size: '+ map.size);
console.log('-------------');

//has 
console.log('Has variable string? '+map.has(string));
console.log('Has function foo? '+map.has(foo));
console.log('Has string string? '+map.has('string'));
console.log('-------------');

//delete
map.delete(string);
console.log('Has variable string? '+ map.has(string));
console.log('-------------');

//clear
map.clear();

console.log('Size: '+ map.size);