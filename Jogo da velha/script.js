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
		campeaoVertical();
		campeaoHorizontal();
		campeaoDiagonal();
		empate();
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
		ganhador(v1);
	}

	v1 = document.getElementById("esqMid").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("dirMid").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}

	v1 = document.getElementById("esqBot").style.backgroundColor;
	v2 = document.getElementById("meiBot").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}

}

function campeaoVertical(){
	v1 = document.getElementById("esqTop").style.backgroundColor;
	v2 = document.getElementById("esqMid").style.backgroundColor;
	v3 = document.getElementById("esqBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}

	v1 = document.getElementById("meiTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("meiBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}

	v1 = document.getElementById("dirTop").style.backgroundColor;
	v2 = document.getElementById("dirMid").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}
}

function campeaoDiagonal(){
	v1 = document.getElementById("esqTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("dirBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}

	v1 = document.getElementById("dirTop").style.backgroundColor;
	v2 = document.getElementById("meiMid").style.backgroundColor;
	v3 = document.getElementById("esqBot").style.backgroundColor;
	if(v1 == v2 && v2 == v3){
		ganhador(v1);
	}	
}

function ganhador(cor){
	if(cor == "red"){
		setTimeout( function(){alert("Jogador N 1 ganhou!");confirmacao();},10);
	}
	else if(cor == "blue"){
		setTimeout( function(){alert("Jogador N 2 ganhou!");confirmacao();},10);
	}
}

function confirmacao(){
	if(confirm("Deseja jogar novamente?") == true){
		location.reload();	
	}
	else{
		document.getElementById("tabela").style.pointerEvents = "none";
	}
}

function empate(){
	var tabela = document.getElementById("tabela");
	for (var i = 0,cell; cell = tabela.cells[i];i++){
		validar(cell);
	}
}