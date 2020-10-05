// formula = peso/altura*altura


//Função que verifica se os caracteres digitados são números ou se possui ponto, ao invés de virgula.	
 function isNumber(value) {

        return /^\d+(?:\.\d+)?$/.test(value);

   };

//Função para pegar os valores dos campos input
function getValue(){
 	var altura = document.getElementById('content-altura-campo').value;	
 	var peso = document.getElementById('content-peso-campo').value;
 	console.log(altura);
 	console.log(peso);

 	if(altura == '' && peso == ''){
 		alert('Informe valores validos');
 	}

 	else{

 		if(isNumber(altura) && isNumber(peso)){

 			SetValue(altura,peso);
 		}

 		else{
 			alert("Incoreto - Utilize ponto(Exemplo: 1.89)");
 		}

 	}
}

// Função para setar os valores nos inputs da tela
function SetValue(alt, pes){
	var a = alt * alt;
	var resultado = pes/a;

	console.log("Resultado:"+ resultado);

	if(resultado < 18.5){
		
		document.getElementById("content-resultado-campo").value = resultado.toFixed(2);
		document.getElementById("content-campo-imc").value = resultado.toFixed(2);
		document.getElementById("content-campo-classificao").value = 'Magreza';
		document.getElementById("content-campo-obesidade").value = 'Grau 0';
		
	}

	else if (resultado >= 18.5 && resultado <= 24.9) {
		
		document.getElementById("content-resultado-campo").value = resultado.toFixed(2);
		document.getElementById("content-campo-imc").value = resultado.toFixed(2);
		document.getElementById("content-campo-classificao").value = 'Normal';
		document.getElementById("content-campo-obesidade").value = 'Grau 0';
	
	}

	else if(resultado >= 25 && resultado <= 29.9){
	
		document.getElementById("content-resultado-campo").value = resultado.toFixed(2);
		document.getElementById("content-campo-imc").value = resultado.toFixed(2);
		document.getElementById("content-campo-classificao").value = 'Sobrepeso';
		document.getElementById("content-campo-obesidade").value = 'Grau 1';
	
	}

	else if(resultado >= 30 && resultado <= 39.9){

		document.getElementById("content-resultado-campo").value = resultado.toFixed(2);
		document.getElementById("content-campo-imc").value = resultado.toFixed(2);
		document.getElementById("content-campo-classificao").value = 'Obesidade';
		document.getElementById("content-campo-obesidade").value = 'Grau 2';

	}

	else if(resultado >= 40){
	
		document.getElementById("content-resultado-campo").value = resultado.toFixed(2);
		document.getElementById("content-campo-imc").value = resultado.toFixed(2);
		document.getElementById("content-campo-classificao").value = 'Obesidade Grave';
		document.getElementById("content-campo-obesidade").value = 'Grau 3';

	}

}

//Função para limpar os campos
function Clear(){
		
		document.getElementById("content-campo-imc").value = '';
		document.getElementById("content-campo-classificao").value = '';
		document.getElementById("content-campo-obesidade").value = '';

		document.getElementById("content-altura-campo").value = '';
		document.getElementById("content-peso-campo").value = '';
		document.getElementById("content-resultado-campo").value = '';
		document.getElementById("content-campo-obesidade").value = '';	
}