let team = {
  name: 'Alliance',
  members: ['william', 'carlos', 'bill'],
  printMembers : function(){
    this.members.forEach((member)=>
      console.log(`${member} from ${this.name} team`)
    )
  }
}

team.printMembers()
