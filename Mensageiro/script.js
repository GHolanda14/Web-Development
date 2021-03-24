let idGrupo;
let usuario;
const paginaMensagens = document.getElementById('chat');
const paginaGrupos = document.querySelector('.paginaGrupos');
const formGp = document.getElementById('formGp');
const formMsg = document.getElementById('formMsg');
const formModal = document.getElementById('formModal');

/*Iniciando a página já com o modal disponível*/
$(document).ready(function(){
    $("#exampleModal").modal({backdrop: 'static', keyboard: false});//Impedindo o modal de fechar
    formMsg.style.display ='none'; //Escondendo o espaço para envio de mensagem
});

formGp.addEventListener("submit",(event)=>{
    event.preventDefault();//Impedir que a página atualize
    criarGrupo();
})

formMsg.addEventListener("submit",(event)=>{
    event.preventDefault();
    criarMensagem();
})

/*Função para enviar a mensagem com o enter*/
formMsg.addEventListener("keydown",function(event){
    if(event.keyCode == 13  && !event.shiftKey){
        event.preventDefault();
        document.getElementById("bntMsg").click();
    }
})

function montarMensagem(mensagem){
    let divisor = document.createElement("div");
    divisor.classList.add("mensagem");

    let nome = document.createElement("h2");
    nome.textContent = mensagem.nome;

    let corpo = document.createElement("pre");
    corpo.textContent = mensagem.corpo;

    divisor.appendChild(nome);
    divisor.appendChild(corpo);

    return divisor;
}

function montarGrupo(grupo){
    let divisor = document.createElement("div");
    divisor.classList.add("grupo");
    divisor.id = grupo.id;
    divisor.onclick = function(){carregarMensagens(divisor.id);};

    let icone = document.createElement("img");
    icone.setAttribute('src','https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png');

    let grup = document.createElement("h3");
    grup.textContent = grupo.nome;
    
    divisor.appendChild(icone);
    divisor.appendChild(grup);

    return divisor;
}

function login(){
    $("#exampleModal").modal('hide');//Escondendo o modal
    usuario = document.getElementById('usuario').value;
    document.getElementById('user').innerHTML = usuario;
    carregarGrupos();
}

function rolagemAutomatica(){
	paginaMensagens.scrollTop = paginaMensagens.scrollHeight;//Rolando a pagina pra baixo
}