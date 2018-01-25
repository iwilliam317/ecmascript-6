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