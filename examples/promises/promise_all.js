function myPromise(value){
  return new Promise((resolve, reject) => {
    if(value <= 0 ) reject('Value ${value} is not valid :/')

    resolve(`Value ${value} resolved :)`)
  });
}

Promise.all([  
  myPromise(2), 
  myPromise(4)
])
  .then(data => console.log(data))
  .catch(err => console.log(err))