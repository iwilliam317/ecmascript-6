var movies = [
  {title: 'Terminator 2', category: 'action'},
  {title: 'It', category: 'horror'},
  {title: 'Saving Private Ryan', category: 'war'},
  {title: 'Need for Speed', category: 'race'},
  ];
  
var isActionMovie = movies.some(function(movie){
    return movie.category === 'action';
});
  
console.log(isActionMovie);

var isRomanceMovie = movies.some(function(movie){
    return movie.category === 'romance';
});

console.log(isRomanceMovie);


var cars = [
  {name: 'A', year: 2001},
  {name: 'B', year: 1999},
  {name: 'C', year:2018}
  ]
  
function isThereCarAfter2017(cars){
  return  carAfter2017 = cars.some(function(car){
    return car.year > 2017
  })
}


console.log(isThereCarAfter2017(cars));

cars.pop();

console.log(isThereCarAfter2017(cars));