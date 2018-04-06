let promise = new Promise((resolve, reject) => {
  let result = false;
  
  if(result){
    resolve("everything is ok..")
  }
  else {
    reject("something is wrong..")
  }
});

promise.then((data) => console.log(data));
promise.catch((data) => console.log(data));
