function sleep(amount){
  return new Promise((resolve, reject) => {
    if(amount <= 300){
      return reject("that is too fast, cool it down");
    }
    setTimeout(() => resolve(`slept for ${amount}`) ,amount)
  })
}

sleep(500)
  .then((result) => {
    console.log(result);
    return sleep(750);
  })
  .then((result) => {
    console.log(result);
    return sleep(1000);
  })
  .then((result) => {
    console.log(result);
    console.log(`ìt is done!`)
  })
  .catch((error) => console.log(error))
