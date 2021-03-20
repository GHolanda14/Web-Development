let usuario;
const paginaMensagens = document.getElementById('paginaMensagens');
const paginaGrupos = document.querySelector('.paginaGrupos');

$(document).ready(function(){
    $("#exampleModal").modal();
});

function insercao(nome){
    let divisor = document.createElement("div");
    divisor.classList.add("grupo");

    let icone = document.createElement("img");
    icone.setAttribute('src','https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png');

    let grup = document.createElement("h3");
    grup.textContent = nome;

    divisor.appendChild(icone);
    divisor.appendChild(grup);
    
    return divisor;
}

function login(){
    usuario = document.getElementById('usuario').value;
    let sera = document.getElementById('user');
    sera.innerHTML = usuario;
    rolagemAutomatica();
}

function teste(){
    let conteudo = "";
    let texto = document.querySelector(".col .texto");    

    conteudo = `<div class="testea"><h2>${usuario}</h2><p>${texto.value}</p></div>`;
    paginaMensagens.innerHTML += conteudo;
    texto.value = "";
    rolagemAutomatica();
}



function rolagemAutomatica(){
	var chat = document.getElementById("paginaMensagens");
	chat.scrollTop = chat.scrollHeight;
}