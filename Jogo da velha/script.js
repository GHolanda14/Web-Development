var jogador = 0;
var v1,v2,v3;
function validar(id){
	var a = document.getElementById(id).style.backgroundColor;
	if(a == "red" || a == "blue"){
		return false;
	}
	else{
		return true;
	}
}
function jogada(id){
	if(validar(id)){
		if(jogador == 0){
			document.getElementById(id).style.backgroundColor = "red";
			jogador = 1;	
		}
		else{
			document.getElementById(id).style.backgroundColor = "blue";
			jogador = 0;		
		}
		if(!vencedor()){
			empate();
		}
	}
	else{
		window.alert("Nao pode");
	}	
}

function campeaoHorizontal(){
	v1 = document.getElementById("esqTop").style.backgroundColor;
	v2 = document.getElementById("meiTop").style.backgroundColor;
	v3 = document.getElementById("dirTop").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("esqMid").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("dirMid").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("esqBot").style.backgroundColor;
	v2 = document.getElementById("meiBot").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}
	return false;
}/* Se for o veremlho ainda pode ganhar mesmo que ainda haja só uma celula sobrando
	Bug do vencedor e velha ao mesmo tempo quando sobra so um espaço*/

function campeaoVertical(){
	v1 = document.getElementById("esqTop").style.backgroundColor;
	v2 = document.getElementById("esqMid").style.backgroundColor;
	v3 = document.getElementById("esqBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("meiTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("meiBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("dirTop").style.backgroundColor;
	v2 = document.getElementById("dirMid").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}
	return false;
}

function campeaoDiagonal(){
	v1 = document.getElementById("esqTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("dirTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("esqBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}
	return false;
}

function empate(){
	var contador = 0;
	var tabela = document.getElementById("tabela");
	var celula = tabela.getElementsByTagName("td");
	for(var i = 0; i < celula.length;i++){
		if(celula[i].style.backgroundColor == ""){
			contador++;
		}
	}
	if(contador <= 1 && jogador != 0){
		setTimeout( function(){alert("Deu velha!");confirmacao();},10);
	}
}

function anuncio(cor){
	if(cor == "red"){
		setTimeout( function(){alert("Jogador N 1 ganhou!");confirmacao();},10);
	}
	else if(cor == "blue"){
		setTimeout( function(){alert("Jogador N 2 ganhou!");confirmacao();},10);
	}
	
}

function vencedor(){
	if(campeaoVertical() || campeaoHorizontal() || campeaoDiagonal()){
		return true;
	} 
	return false;
}

function confirmacao(){
	if(confirm("Deseja jogar novamente?") == true){
		location.reload();	
	}
	else{
		document.getElementById("tabela").style.pointerEvents = "none";
	}
}