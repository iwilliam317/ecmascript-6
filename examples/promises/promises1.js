let promise = new Promise((resolve, reject) => {
  let result = true;
  
  if(result){
    resolve("everything is ok..")
  }
  else {
    reject("something is wrong..")
  }
});

promise.then((data) => console.log(data));
promise.catch((data) => console.log(data));

// note: it is not necessary the usage of arrow function