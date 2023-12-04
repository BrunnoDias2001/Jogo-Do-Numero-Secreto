let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female'), {rate:1.2}
}
    function mensagemInicial() {
        exibirTextoNaTela('h1' , 'jogo do numero secreto ');
        exibirTextoNaTela('p' , 'escolha um numero de 1 a 10');
    }
mensagemInicial()
    
    function verificarChute() {
        let chute = document.querySelector('input').value;
        if (chute == numeroSecreto) {
            exibirTextoNaTela ('h1' , 'Acertou')
            let palavraTentativa = tentativas > 1 ? ' tentativas ' : ' tentativa ' ; 
            let mensagemtentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa} `
            exibirTextoNaTela ('p', mensagemtentativas);
            document.getElementById('reiniciar').removeAttribute('disabled')
        }
        else
        {
         if (chute < numeroSecreto) {
         exibirTextoNaTela ('p' , ' O numero secreto é maior')}
         else {
            exibirTextoNaTela ('p' , ' O numero secreto é menor')
         }
        }    tentativas++
             limparcampo()
    };


function gerarNumeroAleatorio() {
  let numerosEscolhidos = parseInt(Math.random () * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados;length;

  if( quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
  }
  if (listaDeNumerosSorteados.includes(numerosEscolhidos)) {
    return gerarNumeroAleatorio();
} else {
    listaDeNumerosSorteados.push(numerosEscolhidos);
    console.log(listaDeNumerosSorteados)
    return numerosEscolhidos;
  }
    
}
function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}