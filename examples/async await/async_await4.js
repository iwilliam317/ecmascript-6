function myPromise(n){
  return new Promise((resolve, reject) => {
    if(n>0){
      resolve(`${n} is a cool number`);
    }
    else{
      reject(`wow not a cool number`);
    }
  }).then(result => console.log(result)).catch(error => console.log(error))
}

async function start(){
   await myPromise(1);
   await myPromise(3);
   await myPromise(5);
  console.log('message should be placed at last')
}

start();