/* let numeroSecreto = gerarNumeroAleatorio();

// Declarando a funcão
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
// Usando a função
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);
}

// Declarando a função para gerar o número aleatório e declarando a variável no início
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
} */

/* // 1. Criar uma função que exibe "Olá, mundo!" no console.

function saudacao() {
  console.log('Olá, mundo!');
}
saudacao();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
  console.log(`Olá, ${nome}`);
}
exibirOlaNome('Antonio');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function recebeNumero(numero) {
  console.log(numero * 2);
}
recebeNumero(20);

// Outra forma de resolver
function calcularDobro(numero) {
  return numero * 2;
}
let resultadoDobro = calcularDobro(10);
console.log(resultadoDobro);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
let media = calcularMedia(3, 5, 10);
console.log(media);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
retornaMaior(15, 10);

// Outra forma de resolver (ideal)
function encontrarMaior(a, b) {
  return a > b ? a : b;
}
let maiorNumero = encontrarMaior(40, 50);
console.log(maiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function resultadoMultiplicacao(a) {
  return a * a;
}
let resultado = resultadoMultiplicacao(10);
console.log(resultado);
 */

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/* let peso = prompt('Digite seu peso [kg]:');
let altura = prompt('Digite sua altura [m]');

function indiceMassaCorporal(p, a) {
  return p / (a * a);
}

let resultado = indiceMassaCorporal(peso, altura);
alert('Seu IMC é: ' + resultado.toFixed(2)); */

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

/* function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

// exemplo de uso
numero = 5;
let resultado = calcularFatorial(numero);
alert(`O fatorial de ${numero} é ${resultado}`); */

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

/* function ConverterDolarParaReal(valorDolar, cotacao) {
  let valorReal = valorDolar * cotacao;
  return valorReal.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
alert(ConverterDolarParaReal(300, 5.26));
 */

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

/* function mostrarAreaPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  alert(
    `Área da sala ${area} metros quadrados, e perimetro da sala ${perimetro} metros.`,
  );
}

let altura = 3;
let largura = 5;
mostrarAreaPerimetro(altura, largura); */

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
/* function areaPerimetroCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  alert(
    `Área da sala circular é ${area.toFixed(2)} metros quadrados, e perimetro da sala circular é ${perimetro.toFixed(2)} metros.`,
  );
}

let raio = 5;
areaPerimetroCircular(raio); */

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

/* let contador = 1;
function tabuada(numero) {
  while (contador <= 10) {
    let resultado = numero * contador;
    console.log(`${numero} X ${contador} = ${resultado}`);
    contador++;
  }
}

let numero = prompt('Digite um número de 1 a 10 para gerar a tabuada');
tabuada(numero);
 */
