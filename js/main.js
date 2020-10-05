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
 			
 		}

 		else{
 			alert("Incoreto - Utilize ponto(Exemplo: 1.89)");
 		}

 	}
}