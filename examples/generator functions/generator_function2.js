function* busLine(){
  yield "Starting..."
  yield "Request Stopping..."
  yield "Stopping..."
}

for(let b of busLine()){
  console.log(b)
}