let team;

team = {
  name : 'Team X',
  members: ['william', 'carlos'],
  printMembers : function(){
    this.members.forEach(function(member){
      console.log(`Member ${member} is from team ${this.name}`)
    })
  }
};


team = {
  name : 'Team X',
  members: ['william', 'carlos'],
  printMembers : function(){
    this.members.forEach(member=>{
      console.log(`Member ${member} is from team ${this.name}`)
    })
  }
};




team.printMembers()