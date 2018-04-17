let promise = new Promise((resolve, reject) => {
  if(true){
    resolve('everything is ok...');
  }
  else{
    throw new Error('something is wrong...');
  }
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 2 ok..');
  },3000)
})

function whatever(){
    setTimeout(() => {
    console.log('whatever function..');
  },3000)
}

promise
  .then((result) => console.log(result))
  .then(whatever())
  .catch((error) => console.log(error))
