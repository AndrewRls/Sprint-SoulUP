let body = document.body

let header = document.querySelector(".cabecalho")

let hero = document.querySelector(".contato-hero")

let titulo = document.querySelector(".contato-hero h1")

let texto = document.querySelector(".contato-hero p")

let cards = document.querySelectorAll(".contato-caixa")


function escuro(){

    body.classList.add("body__escuro")

    header.classList.add("cabecalho__escuro")

    hero.classList.add("hero__escuro")

    titulo.classList.add("titulo__escuro")

    texto.classList.add("texto__escuro")

    cards.forEach((card)=>{
        card.classList.add("card__escuro")
    })

}


function claro(){
    window.location.reload()
}


let botaoEscuro = document.getElementById("noite")
botaoEscuro.addEventListener("click", escuro)

let botaoClaro = document.getElementById("luz")
botaoClaro.addEventListener("click", claro)