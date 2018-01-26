//Set
//set doesn't push a duplicate element
//for instace: attempted to add music1 twice and just one is actually pushed

var music1 = {title: 'Numb', band: 'Linkin Park'};
var music2 = {title: 'Everywhere', band: 'João'};
var music3 = {title: 'Whatsover', band: 'Fernanda'};

var playlist = new Set();

playlist.add(music1);
playlist.add(music3);
playlist.add(music1);

playlist.delete(music3)

for(var music of playlist){
  console.log(music)
}





function Person(name, age, gender){
  this._name = name;
  this._age = age;
  this._gender = gender;
}

Person.prototype.getName = function(){
  return this._name;
}

Person.prototype.getAge = function(){
  return this._age;
}

Person.prototype.getGender = function(){
  return this._gender;
}

var william = new Person('William', 28, 'Male');
var bruna = new Person('Bruna', 31, 'Female');
var juliano = new Person('Juliano', 28, 'Male');
var raquel = new Person('Raquel', 29, 'Female');


var collection = new Set();

collection.add(raquel.getName());
collection.add(william.getName());
collection.add(william.getName());
collection.add(bruna.getName());
collection.add(juliano.getName());
collection.add(raquel.getName());


for(var p of collection){
  console.log(p)
}