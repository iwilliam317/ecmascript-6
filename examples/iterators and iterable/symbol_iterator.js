// Symbol.iterator
//every object has a property value and done
//done is used for control the iterator 

var names = ['William', 'João', 'Vanessa'];

iteratorNames = names[Symbol.iterator]();

console.log(iteratorNames.next());
console.log(iteratorNames.next());
console.log(iteratorNames.next());
console.log(iteratorNames.next());