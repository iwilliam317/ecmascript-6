function* packageDelivery(){
  console.log(`Passing through street A`);
  yield `Stop 1`;
  console.log(`Passing through street B`);
  yield `Stop 2`;
  console.log(`Passing through street C`);
  yield `Package delivered`;
}

const delivery = packageDelivery();
console.log(delivery.next())
console.log(delivery.next())
console.log(delivery.next())
console.log(delivery.next())