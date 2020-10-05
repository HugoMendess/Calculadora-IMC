// formula = peso/altura*altura



  function isNumber(value) {

        return /^\d+(?:\.\d+)?$/.test(value);

   };


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

function SetValue(alt, pes){
	var a = alt * alt;
	var resultado = pes/a;

	console.log("Resultado:"+ resultado);

	if(resultado < 18.5){
		document.getElementById("content-resultado-campo").value = resultado;
		alert(resultado)
	}

	else if (resultado >= 18.5 && resultado <= 24.9) {
		document.getElementById("content-resultado-campo").innerHTML = resultado.ToString(2);
		alert(resultado)
	}

	else if(resultado >= 25 && resultado <= 29.9){
		document.getElementById("content-resultado-campo").innerHTML = resultado;
		alert(resultado)
	}

	else if(resultado >= 30 && resultado <= 39.9){
		document.getElementById("content-resultado-campo").innerHTML = resultado;
		alert(resultado)
	}

	else if(resultado >= 40){
		document.getElementById("content-resultado-campo").innerHTML = resultado;
		alert(resultado)
	}



}