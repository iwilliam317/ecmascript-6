function whatever(seconds = 0){
  return new Promise((resolve, reject) => {
    if (seconds > 0){
      setTimeout(() => {
        resolve(`resolving promise after ${seconds} seconds`)
      }, seconds * 1000);
    }
    else{
      reject('ops! sorry...')
    }

  })
  .then(result =>  console.log(result))
  .catch(error => console.log(error))
} 



async function start(){
  await whatever(1);
  await whatever(2);
  await whatever(4);
  await whatever();
  console.log('finished..')
}

start();