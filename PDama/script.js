/* Função para colorir o tabuleiro de Dama ou xadrez */

function colorir(){
    let tabuleiro = document.getElementsByTagName('td');
    let linha = 2;
    for(let i = 0; i < tabuleiro.length; i++){
        if(linha % 2 == 0){
            if(i % 2 == 0)tabuleiro[i].style.backgroundColor = 'black';
            (i+1) % 8 == 0 ? linha = 1 : linha = 2;
        }
        else if(linha % 2 == 1){
            if(i % 2 != 0)tabuleiro[i].style.backgroundColor = 'black';
            (i+1) % 8 == 0 ? linha = 2 : linha = 1;
        }       
    }
}
colorir();