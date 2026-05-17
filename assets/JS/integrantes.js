let body = document.body

let header = document.querySelector(".cabecalho")

let titulo = document.querySelector(".titulo__integrantes")

let cards = document.querySelectorAll(".hero__conteudo")


function escuro(){

    body.classList.add("body__escuro")

    header.classList.add("cabecalho__escuro")

    titulo.classList.add("titulo__escuro")

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