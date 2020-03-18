var jogador = 0;
var v1,v2,v3;
function validar(id){
	var a = document.getElementById(id).value;	
	if(a == 0 || a == 1){
		return false;
	}
	else{
		return true;
	}
}
function jogada(id){
	if(validar(id)){
		if(jogador == 0){
			document.getElementById(id).style.backgroundImage = "url('corounavairus.jpg')";
			document.getElementById(id).value = 0;
			jogador = 1;	
		}
		else{
			document.getElementById(id).style.backgroundImage = "url('chicocunha.jpg')";
			document.getElementById(id).value = 1;
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
	v1 = document.getElementById("esqTop").value;
	v2 = document.getElementById("meiTop").value;
	v3 = document.getElementById("dirTop").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("esqMid").value;
	v2 = document.getElementById("meiMid").value;
	v3 = document.getElementById("dirMid").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("esqBot").value;
	v2 = document.getElementById("meiBot").value;
	v3 = document.getElementById("dirBot").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}
	return false;
}/* Se for o veremlho ainda pode ganhar mesmo que ainda haja só uma celula sobrando
	Bug do vencedor e velha ao mesmo tempo quando sobra so um espaço*/

function campeaoVertical(){
	v1 = document.getElementById("esqTop").value;
	v2 = document.getElementById("esqMid").value;
	v3 = document.getElementById("esqBot").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("meiTop").value;
	v2 = document.getElementById("meiMid").value;
	v3 = document.getElementById("meiBot").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("dirTop").value;
	v2 = document.getElementById("dirMid").value;
	v3 = document.getElementById("dirBot").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}
	return false;
}

function campeaoDiagonal(){
	v1 = document.getElementById("esqTop").value;
	v2 = document.getElementById("meiMid").value;
	v3 = document.getElementById("dirBot").value;
	if(v1 == v2 && v2 == v3){
		anuncio(v1);
		return true;
	}

	v1 = document.getElementById("dirTop").value;
	v2 = document.getElementById("meiMid").value;
	v3 = document.getElementById("esqBot").value;
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
		if(celula[i].value == undefined){
			contador++;
		}
	}
	if(contador <= 1 && jogador != 0){
		setTimeout( function(){alert("Deu velha!");confirmacao();},10);
	}
}

function anuncio(valor){
	if(valor == 0){
		setTimeout( function(){alert("COROUNA VAIRUS ganhou!");confirmacao();},10);
	}
	else if(valor == 1){
		setTimeout( function(){alert("CHICO CUNHA ganhou!");confirmacao();},10);
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