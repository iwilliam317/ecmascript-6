var movies = [
  {title: 'Terminator 2', category: 'action'},
  {title: 'It', category: 'horror'},
  {title: 'Saving Private Ryan', category: 'war'},
  {title: 'Need for Speed', category: 'race'},
  ];


//Ecmascript 5
//var isActionMovie = false;
//for(var i=0; i< movies.length; i++){
//  if(movies[i].category == 'action'){
//    isActionMovie = true;
//  }
//}

//Ecmascript 6
var isActionMovie = movies.some(function(movie){
    return movie.category === 'action';
});
  
console.log('Is there any action movie? '+ isActionMovie);

var isRomanceMovie = movies.some(function(movie){
    return movie.category === 'romance';
});

console.log('s there any romance movie? '+isRomanceMovie);
