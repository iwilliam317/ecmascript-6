//hoisting
//only declaration is hoited to the top

//EXAMPLE 1 - working
name = 'William',
printName(name);

function printName(name){
  console.log(name);
}

var name;

//hoisting will do this and it will work fine
function printName(name){
  console.log(name);
}

var name;

name = 'William',
printName(name);









//EXAMPLE 2 - not working
//initialization (var name = 'william') doesn't hoist up

printName(name);

function printName(name){
  console.log(name);
}

var name = 'william';


//hoisting will do this and name will be undefined
function printName(name){
  console.log(name);
}
printName(name);
var name = 'william';