/*
Case sensitive = reocnhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementesByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "blue"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "blue"
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length <= 2) {
        txtAssunto.innerHTML = '<h1>Escreve mais aê</h1>'
        txtAssunto.style.color = "red"
    } else if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "<h1>Agora foi demais, máx. 100 caracter</h1>"
        txtAssunto.style.color = "red"
        /*txtAssunto.style.display = "block"*/
    } else {
        txtAssunto.innerHTML = "Assim tá bacana!"
        txtAssunto.style.color = "blue"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '450px'
    mapa.style.height = '300px'
}