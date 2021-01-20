const tabuleiro = document.querySelector('.tabuleiro');

/*Função para criar o tabuleiro de Dama*/
function criarTabuleiro(){
    let conteudo = '';
    for(let i = 0; i < 8;i++){
        conteudo += '<tr>';
        for(let j = 0; j < 8; j++){
            conteudo += '<td><span></span></td>';
        }
        conteudo += '</tr>';
    }
    tabuleiro.innerHTML += conteudo;
}
/* Função para colorir o tabuleiro de Dama*/

function colorir(){
    let casa = document.getElementsByTagName('td');
    let linha = 2;
    for(let i = 0; i < casa.length; i++){
        if(linha % 2 == 0){
            if(i % 2 == 0)casa[i].style.backgroundColor = 'black';
            (i+1) % 8 == 0 ? linha = 1 : linha = 2;
        }
        else if(linha % 2 == 1){
            if(i % 2 != 0)casa[i].style.backgroundColor = 'black';
            (i+1) % 8 == 0 ? linha = 2 : linha = 1;
        }       
    }
}

/*Função para preencher o tabuleiro de dama com peças*/
function preencher(){
    let linhas = tabuleiro.rows;

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(i<3 && linhas[i].children[j].style.backgroundColor == 'black'){
                linhas[i].children[j].firstElementChild.setAttribute('class','pecaBranca');
            }
            else if(i > 4 && linhas[i].children[j].style.backgroundColor != 'black'){
                linhas[i].children[j].firstElementChild.setAttribute('class','pecaPreta');
            }
        }
    }
}
criarTabuleiro();
colorir();
preencher();