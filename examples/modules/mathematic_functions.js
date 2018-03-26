////////////////////////////////////////////////// maths.js //////////////////////////////////////////////////
//suppose this is content from file maths.js
function sum(...values){
  return values.reduce((sum, value)=> sum += value, 0)
}

function randomNumberUntil(delimiter){
  return Math.floor(Math.random()*delimiter+1)
}

export default sum; //default
export { randomNumberUntil } //named

////////////////////////////////////////////////// index.js //////////////////////////////////////////////////
//suppose this is index.js

//1. import all content
import * as maths from 'math';
console.log(math.sum(2, 2));

//2. import pieces 
//import {sum } from 'maths';