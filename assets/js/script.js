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
    }

}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
