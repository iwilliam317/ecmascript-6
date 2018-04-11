function firstPromise(){
  return new Promise((resolve, reject) => {
    if(true){
      resolve("Promise one resolved..");
    }
    else{
      reject("Promise one rejected");
    }
    
  })
}

function secondPromise(){
  return new Promise((resolve, reject) => {
    resolve("Promise two resolved..")
  })
}

firstPromise()
  .then((result) => console.log(result))
  .then(secondPromise().then((result) => console.log(result)))
  .catch((error) => console.log(error))