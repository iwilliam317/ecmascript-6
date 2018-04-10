let promise = new Promise((resolve, reject) => {
  
  throw new Error("Promise crashed");
  resolve("Promise ok");
 
});


promise
  .then((data) => console.log(data))
  .catch((data) => console.log(data))