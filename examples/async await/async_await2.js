async function start(){
  await promise.then(data => console.log(data));
   console.log('message..')
}

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolving promise after 3 seconds..")
  }, 3000)
});

start()
