// a simple example inspired by sorting hat from Harry Potter movies
var sortingHat = function(wizard){
  var houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
  var house = [houses[Math.floor(Math.random() * 4)]];
  console.log(wizard + ' ' + house);
}

var wizards = ['Harry Potter', 'Draco Malfoy', 'Ron Weasley'];

wizards.forEach(function(wizard){
  sortingHat(wizard);
});
