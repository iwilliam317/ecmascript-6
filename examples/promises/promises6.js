function rest(hour){
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (hour < 6)
        reject('wow you should spend more time resting... ')
      resolve(`yay, resting for ${hour} hours...`);
    }, hour * 1000);
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
}


async function sleep(){
  await rest(1);
  await rest(3);
  await rest(18);
  await rest(7);
  console.log('finished..');
}

sleep();