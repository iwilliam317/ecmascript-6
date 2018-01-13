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