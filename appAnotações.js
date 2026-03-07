/* let titulo = document.querySelector('h1'); //criando variável título e selecionando o h1 no html
titulo.innerHTML = 'Jogo do número secreto'; // Alterando o título via JS

let paragrafo = document.querySelector('p'); // criando a variável paragrafo e selecionando a tag p no html
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// trecho do código responsável por alguma ação (function). Usar nomes sempre descritivos para saber exatamente o que ela faz.
function verificarChute() {
  console.log('O botão foi clicado!');
} */

/* // Simplificando as Functions

// Declarando a funcão
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
// Usando a função
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  console.log('O botão foi clicado!');
} */

// Gerando o número aleatório

// Declarando a variável numeroSecreto

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
}
 */

// Reiniciando o jogo

/* let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
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
  //console.log(chute == numeroSecreto);
  // exibindo na tela o resultado
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; // html pode dar conflito ao usar template string, por isso criamos essa linha.
    exibirTextoNaTela('p', mensagemTentativas);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    //exibirTextoNaTela('h1', 'Errou!');
  }
}

// Declarando a função para gerar o número aleatório e declarando a variável no início
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
} */

/* // Botão reiniciar

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
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
  //console.log(chute == numeroSecreto);
  // exibindo na tela o resultado
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; // html pode dar conflito ao usar template string, por isso criamos essa linha.
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled'); // habilitar o botão "Novo Jogo" que está desabilitado no html
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    limparCampo(); // usando função para limpar o campo
  }
}

// Declarando a função para gerar o número aleatório e declarando a variável no início
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input'); // pegamos o campo do tipo input
  chute.value = ''; // informamos que queremos deixá-lo com um valor vazio
} */

// Reiniciar o jogo

/* let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// Declarando a funcão
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
// Usando uma função para chamar a função de mensagens iniciais
function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial(); // chamando a função para que ela execute a primeira vez

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

// criar a função após alterar no html
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio(); //reiniciar gerando um novo número aleatório
  limparCampo(); // limpar o campo de chute
  tentativas = 1; // voltar o número de tentativas pra 1
  //exibirTextoNaTela('h1', 'Jogo do número secreto'); // Ajustando os textos para o padrão inicial do jogo.
  //exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
  exibirMensagemInicial(); // usando a função para exibir as mensagens iniciais
  // desabilitar o botão de novo jogo após reiniciar o jogo
  document.getElementById('reiniciar').setAttribute('disabled', true); // pega pelo ID 'reiniciar' e adiciona o atributo 'disabled', true. para que a condição seja verdadeira.
} */

// Array / Listas

/* let listaDeNumerosSorteados = []; // criando a variável para a lista de números sorteados
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 4 + 1); // criando uma variável para o número aleatório escolhido
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    // vai verificar se o novo número escolhido já está na lista
    return gerarNumeroAleatorio(); // se estiver ele gera um novo
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido); // adiciona o número escolhido no final da lista
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido; // se não estiver na lista vai retornar o numero escolhido
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
} */

// Limitando os números sorteados

/* let listaDeNumerosSorteados = []; // 1. criando a variável para a lista de números sorteados
let numeroLimite = 10; // 5. criando uma variável para o limite do números sorteados e não ter que ficar alterando os campos na mão
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // 7. alteramos o numero pela nova variável numeroLimite
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // 2. criando uma variável para quantidade de números na lista

  if (quantidadeDeElementosNaLista == numeroLimite) {
    // 8. alteramos aqui para a variável numeroLimite também
    // 3. se a quantidade de números sorteados for igual a quantidade de número na lista
    listaDeNumerosSorteados = []; // 4. ele zera a lista/ cria uma vazia
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
} */

// Speech / Falar

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.1 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', `O número secreto é menor`);
    } else {
      if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é maior`);
      }
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
