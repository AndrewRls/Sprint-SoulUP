// ELEMENTOS
let fundo = document.getElementsByTagName("body")[0]
let heade = document.getElementsByTagName("header")[0]


let cabecalhos = document.querySelectorAll(".solucao__div__cabecalho")

let titulos = document.querySelectorAll(
    ".sobre__h1, .solucao__conteudo__h2, .solucao__valores__h2, .cabecalho__vantagens"
)

let textos = document.querySelectorAll(
    ".solucao__conteudo__p, .sobre__lista__conteudo, .lista__vantagens p"
)

let caixas = document.querySelectorAll(
    ".conteudos, .lista__valores, .lista__vantagens p"
)


// FUNÇÃO MODO ESCURO
function escuro() {

    // BODY
   fundo.setAttribute("class", "body__escuro")

    // HEADER
    heade.setAttribute("class", "cabecalho__escuro")

    // CABEÇALHOS
    cabecalhos.forEach((item) => {
        item.style.backgroundColor = "#003033"
        item.style.border = "1px solid #0ff"
    })

    // TÍTULOS
    titulos.forEach((titulo) => {
        titulo.style.color = "#ffffff"
    })

    // TEXTOS
    textos.forEach((texto) => {
        texto.style.backgroundColor = "#003033cc"
        texto.style.color = "#ffffff"
        texto.style.boxShadow = "0rem 1rem 1rem rgba(0,0,0,0.5)"
    })

    // CAIXAS
    caixas.forEach((caixa) => {
        caixa.style.backgroundColor = "#002529"
        caixa.style.color = "#ffffff"
    })
}


// FUNÇÃO MODO CLARO
function claro() {
    window.location.reload()
}


// BOTÕES
let botaoEscuro = document.getElementById("noite")
botaoEscuro.addEventListener("click", escuro)

let botaoClaro = document.getElementById("luz")
botaoClaro.addEventListener("click", claro)