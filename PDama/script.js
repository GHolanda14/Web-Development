const tabuleiro = document.querySelector('.tabuleiro');

/*Função para criar o tabuleiro de Dama*/
function criarTabuleiro(){
    let conteudo = ``;
    for(let i = 0; i < 8;i++){
        conteudo += '<tr>';
        for(let j = 0; j < 8; j++){
            conteudo += `<td id='${i+1}_${j+1}'onclick='mostrarMovimento(id)'><span></span></td>`;
        }
        conteudo += '</tr>';
    }
    tabuleiro.innerHTML += conteudo;
}
/* Função para colorir o tabuleiro de Dama*/

function colorir(){
    let casa = document.getElementsByTagName('td');
    let linha,coluna;
    for(let i = 0; i < casa.length; i++){
        linha = casa[i].id.split('_')[0];
        coluna = casa[i].id.split('_')[1];

        if(linha % 2 == 1){
            if(coluna % 2 == 1)casa[i].style.backgroundColor = 'black';
        }
        else if(linha % 2 == 0){
            if(coluna % 2 == 0)casa[i].style.backgroundColor = 'black';
        }       
    }
}

/*Função para preencher o tabuleiro de dama com peças*/
function preencher(){
    let linhas = tabuleiro.rows;

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(linhas[i].cells[j].style.backgroundColor == 'black'){
                if(i<3){
                    linhas[i].cells[j].firstElementChild.setAttribute('class','pecaVermelha');
                }
                else if(i > 4){
                    linhas[i].cells[j].firstElementChild.setAttribute('class','pecaAzul');
                }
            }
        }
    }
}

/*Função para demonstrar movimentos disponíveis*/
function mostrarMovimento(id){
    let linha = id.split('_')[0];//3
    let coluna = id.split('_')[1];//3
    //Pode se mover para 4_2 ou 4_4
    //Só funciona com as peças de cima :(

    console.log(`You can move to: ${linha-1+2}_${coluna-1} or ${linha-1+2}_${coluna-1+2}`);

}
criarTabuleiro();
colorir();
preencher();
