function* packageDelivery(){
  console.log(`Passing through street A`);
  yield `Stop 1`;
  console.log(`Passing through street B`);
  yield `Stop 2`;
  console.log(`Passing through street C`);
  yield `Package delivered`;
}

const delivery = packageDelivery();
//rustic iterator
// console.log(delivery.next())
// console.log(delivery.next())
// console.log(delivery.next())
// console.log(delivery.next())


//improved
// let next = delivery.next();
// while(!next.done){
//   console.log(next);
//   next = delivery.next();
// }

// easiest way
for(let step of delivery){
  console.log(step)
}