function escuro(){
let header = document.getElementsByTagName("header")[0]
let div = document.getElementsByClassName("chamada__txt") [0]
header.style.background="black"
div.style.background="black" 
div.style.color="white"
}
let botaoEscuro = document.getElementsByTagName("button")[0]
botaoEscuro.addEventListener ("click", escuro)

