function sleep(amount){
  return new Promise((resolve, reject) => {
    if(amount <= 300){
      reject("that is too fast, cool it down");
    }
    setTimeout(() => resolve(`slept for ${amount}`) ,amount)
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
}



async function start(){
  await sleep(200);
  console.log('taking a break..')
  await sleep(750);
  await sleep(1000);
  console.log('awaiting for promise to be finished');
}

start();