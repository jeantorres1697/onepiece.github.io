document.getElementById("btn-avancar");
 
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");




//identifcando o clique do usuário
btnAvancar.addEventListener("click", function(){
  
  if (cartaoAtual === cartoes.length - 1) return;
  
    //buscar personagem selecionado e esconder
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
  
  //fazer aparecer proximo persoagem
  
  cartaoAtual++;
  
  cartoes[cartaoAtual].classList.add("selecionado");
  
  
})  

// fzer voltar o personagem ao clica na seta da esquerda
btnVoltar.addEventListener("click", function(){
  
  if(cartaoAtual === 0) return;
    //buscar personagem selecionado e esconder
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
  
  //fazer aparecer proximo persoagem
  
  cartaoAtual--;
  
  cartoes[cartaoAtual].classList.add("selecionado");
  
})  