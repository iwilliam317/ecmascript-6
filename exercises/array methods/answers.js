// Exercício 1 - Par ou ímpar?
//Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.

//var numeros = [0,1,2,3,4,5];
//for(var i = 0; i<= numeros.length; i++) {
//    if(i % 2 === 0) {
//        console.log(i + ' é par');
//    } else {
//        console.log(i + ' é ímpar');
//   }
//}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar


var numeros = [0,1,2,3,4,5];

numeros.forEach(function(numero){
  if(numero%2==0){
    console.log(numero + ' é par');
  }
  else{
    console.log(numero + ' é ímpar')
  }
});




//Exercício 2 - Quero o dobro
//Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

//Exemplo: dobrar([1,2,3]) → [2,4,6]

var numeros = [1,2,3];

var dobrar = numeros.map(function(numero){
	return numero * 2;
})

console.log(dobrar)



//Exercício 3 - NÃO ESTOU BRAVO
//Escreva o método caps que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

//Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

function caps(arrayString){
  var capslock = [];
  capslock = arrayString.map(function(msg){
    return msg.toUpperCase();
  })
  
  return capslock;
}

var arrayString = caps(['oi', 'tudo', 'bem?']);

console.log(arrayString);



//Exercício - Limpando o estoque
//Crie um método chamado existeProdutosDatados que recebe um parâmetro chamado produtos que é um array de produtos e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar true, caso contrário, false. Cada produto tem as seguintes características:

//nome: String que representa o nome do produto
//preco: Número que representa o preço do produto
//dataValidade: Data de validade do produto
//O método também deve aceitar um segundo parâmetro dataReferencia. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.

//Tome como exemplo os produtos a seguir:

//var produtos = [
//  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
//  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
//  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
//]
//Exemplo: existeProdutosDatados(produtos, '2017-03-01') → true
//existeProdutosDatados(produtos,'2016-01-01') → false

var produtos = [
  { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
  { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
  { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
]

function existeProdutosDatados(produtos, data){
  var dataReferencia = new Date();
  
  if (data){
    dataReferencia = new Date(data);
    
  }
  
  return produtos.some(function(produto){
    return new Date(produto.dataValidade) < dataReferencia;
  })
}

existeProdutosDatados(produtos, '2017-03-01');
existeProdutosDatados(produtos,'2016-01-01');