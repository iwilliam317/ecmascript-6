var books = [
  { title: 'Harry Potter' , storageLocation: 'A1', author: 'J.K Rowling'},
  { title: 'Lord of the rings', storageLocation: 'B2', author: 'Atkins'},
  { title: 'Jurassic Park', storageLocation: 'C3', author: 'Reinold'}
  ]
  
var bookStorage = new Map();


for (var book of books){
  bookStorage.set(book.title, book.storageLocation);
}

//map is iterable so we can use of instead of in
//for(var entries of bookStorage.entries()){
//  console.log(entries);
//}

function getBookLocation(title){
  var result = bookStorage.get(title);
  if (result === undefined){
    console.log('Not found');
  }
  else{
    console.log('Location: '+ result)
  }
}

getBookLocation('Harry Potter');
getBookLocation('Jurassic Park');