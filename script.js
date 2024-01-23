//variaveis com os itens puxado do html
var imagem = document.getElementById('semaforo')
var btnvermelho = document.getElementById('btn1')
var btnamarelo = document.getElementById('btn2')
var btnverde = document.getElementById('btn3')
var btndesligado = document.getElementById('btn4')
var tdsbotoes = document.getElementsByClassName('botoes')

//função botão Vermelho
function btnred(){
    imagem.src = './imagens/vermelho.png';
}
//função botão Amarelo
function btnyellow(){
    imagem.src = './imagens/amarelo.png';
}
//função botão Verde
function btngreen(){
    imagem.src = './imagens/verde.png';
}

//eventos ao clicar nos botões
btnvermelho.addEventListener('click', btnred)
btnamarelo.addEventListener('click', btnyellow)
btnverde.addEventListener('click', btngreen)