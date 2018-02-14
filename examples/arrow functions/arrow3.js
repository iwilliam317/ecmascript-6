
let me = {
  name: 'william',
  parents: ['nelson', 'rosalina'],
  printParents : function(){
    this.parents.forEach(p =>
      console.log(`${p} / son ${this.name}`)
    )
  }
}

me.printParents()