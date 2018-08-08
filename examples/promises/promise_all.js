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



/////////////////////////////////////////////////////////////////////////////////////////////////////
function makePromise(value){
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

const promise1 = makePromise('first');
const promise2 = makePromise('second');

Promise.all([promise1, promise2])
  .then(data => console.log(data))

