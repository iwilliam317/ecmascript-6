function sum(multiplier = 1,...values){
  let result = 0;
  return values.forEach((value)=>{
    console.log(result += value* multiplier);
  })
}

sum(2, 4, 6);