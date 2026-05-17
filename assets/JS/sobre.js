let body = document.body

let header = document.querySelector(".cabecalho")

let cabecalho = document.querySelector(".sobre__div__cabecalho")

let textos = document.querySelectorAll(
    ".sobre__conteudo__p, .sobre__lista__conteudo, .lista__vantagens p"
)

let caixas = document.querySelectorAll(
    ".conteudos, .lista__valores"
)

let contato = document.querySelector(".sobre__contato")


function escuro(){

    body.classList.add("body__escuro")

    header.classList.add("cabecalho__escuro")

    cabecalho.classList.add("sobre__div__cabecalho__escuro")

    textos.forEach((texto)=>{
        texto.classList.add("texto__escuro")
    })

    caixas.forEach((caixa)=>{
        caixa.classList.add("caixa__escuro")
    })

    document.querySelector(".lista__valores")
    .classList.add("lista__valores__escuro")

    contato.classList.add("contato__escuro")
}


function claro(){
    window.location.reload()
}


let botaoEscuro = document.getElementById("noite")
botaoEscuro.addEventListener("click", escuro)

let botaoClaro = document.getElementById("luz")
botaoClaro.addEventListener("click", claro)