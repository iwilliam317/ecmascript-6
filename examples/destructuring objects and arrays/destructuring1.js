let Person = {
  name: 'william',
  gender: 'male',
  github: 'github.com/iwilliam317'
}

//ES5
//var name = Person.name;
//var gender = Person.gender;
//var github = Person.github;
//console.log(name +", " + gender + ", " +github);

//ES6
let {name, gender, github} = Person
console.log(`${name}, ${gender}, ${github}`)