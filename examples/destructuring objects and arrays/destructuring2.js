//using labels
let contact = {
  name: 'joão',
  phoneNumber: '3289-1234',
  eletronicMail: 'joao@joao.com'
}

let {name, phoneNumber:phone, eletronicMail:email} = contact

console.log(`Using labels is cool! 
Name: ${name} 
Phone: ${phone}  
email: ${email}`)