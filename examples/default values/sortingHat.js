
const chapeuSeletor = (aluno='Aluno', casas = ['Grifinória', 'Lufa-Lufa', 'Corvinal', 'Sonseria']) =>`${aluno} vai para a casa ${casas[Math.floor(Math.random()*4)]}`

console.log(chapeuSeletor());
console.log(chapeuSeletor('william'));
