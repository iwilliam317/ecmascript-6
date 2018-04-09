let promise = new Promise( function(resolve, reject){
  
  //3 seconds delay to simulate an assyncronous function
  let time = 3000;
 
  setTimeout(() => {
    if(true){
      resolve("promise executed...");
    }
    else{
      reject("promise crashed...");
    }    
  }, time)

}
);



promise.then((data) => console.log(data));
promise.catch((data) => console.log(data));

console.log('executing code before...')