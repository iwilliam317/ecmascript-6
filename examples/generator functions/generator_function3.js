const project = {
  name: 'Repense',
  location: 'São José dos Campos',
  expertise: 'Back-End',
  productOwner: 'Fausto',
  scrumMaster: 'Thiago',
  junior: 'William',
  senior: 'Gabriel',
  [Symbol.iterator] : function*(){
    yield `Project: ${this.name}`;
    yield `Place: ${this.location}`;
  }
}

for (let info of project){
  console.log(info)
}