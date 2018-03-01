//rest for n parameters
function sum(...values){
  return values.reduce((out, value)=>{
    return out = out+value
  }, 0)
}

console.log(sum(1))
console.log(sum(1,2))
