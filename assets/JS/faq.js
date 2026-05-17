let body = document.body

let header = document.querySelector(".cabecalho")

let main = document.querySelector(".main__faq")

let titulo = document.querySelector(".faq__title")

let cards = document.querySelectorAll(".faq__li")

let textos = document.querySelectorAll(".faq__h2, .faq__p")


function escuro(){

    body.classList.add("body__escuro")

    header.classList.add("cabecalho__escuro")

    main.classList.add("main__faq__escuro")

    titulo.classList.add("titulo__escuro")

    cards.forEach((card)=>{
        card.classList.add("card__escuro")
    })

    textos.forEach((texto)=>{
        texto.classList.add("texto__escuro")
    })

}


function claro(){
    window.location.reload()
}


let botaoEscuro = document.getElementById("noite")
botaoEscuro.addEventListener("click", escuro)

let botaoClaro = document.getElementById("luz")
botaoClaro.addEventListener("click", claro)