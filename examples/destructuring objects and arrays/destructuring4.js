let contacts = [
  {name: 'Carol', phoneNumber:'1234-1234'},
  {name: 'Pedro', phoneNumber:'3214-2144'},
  {name: 'Luan', phoneNumber:'4532-1643'}
]

const [, {name, phoneNumber:phone}] = contacts

 console.log(`${name} ${phone}`)