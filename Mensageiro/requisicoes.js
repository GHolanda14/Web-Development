let nomeGrupo = document.querySelector('.col-4 .texto');
let texto = document.querySelector(".col .texto");

/*Funções do grupo*/
function adicionarGrupo(grupo){
    axios({
        method: "GET",
        url: "https://server-json-lms.herokuapp.com/grupos/"+grupo.id,
    }).then((response)=>{
        let grupinhos = montarGrupo(grupo);
        paginaGrupos.appendChild(grupinhos);
    }).catch((error)=>{
        console.log(error);
    })
}

function carregarGrupos(){
    axios({
        method: "GET",
        url: "https://server-json-lms.herokuapp.com/grupos",
    }).then((response)=>{
        let grupos = response.data;
        for(grupo of grupos){
            adicionarGrupo(grupo);
        }
    }).catch((error)=>{
        console.log(error);
    })
}

function criarGrupo(){
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/grupos",
        data: {"nome": nomeGrupo.value},
    }).then((response)=>{
        adicionarGrupo(response.data);
    }).catch((error)=>{
        console.log(error);
    }) 
}

/*Funções da mensagem*/
function carregarMensagens(id){
    /*Tive que usar essa gambiarra porque não consegui ver se existia a rota disponível para acessar cada mensagem individualmente*/
    paginaMensagens.innerHTML = "";
    idGrupo = id;
    axios({
        method: "GET",
        url: "https://server-json-lms.herokuapp.com/grupos/"+id
        +"/mensagens",
    }).then((response)=>{
        let mensagens = response.data;
        for(mensagem of mensagens){
            paginaMensagens.appendChild(montarMensagem(mensagem));
            formMsg.style.display = '';
            rolagemAutomatica();
        }
    }).catch((error)=>{
        console.log(error);
    })
}

function criarMensagem(){
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/grupos/"+idGrupo
        +"/mensagens",
        data: {"nome": usuario,"corpo": texto.value,"grupoId": idGrupo},
    }).then((response)=>{
        carregarMensagens(idGrupo);
    }).catch((error)=>{
        console.log(error);
    })
}