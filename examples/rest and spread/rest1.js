//rest for n parameters
function sum(...values){
  let outcome = 0;
  
  for(var i=0; i<values.length; i++){
    outcome = outcome + values[i];
  }
  console.log(`Outcome: ${outcome}`)
}

sum(1)
sum(1,2)