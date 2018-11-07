
var inputDni = document.getElementById('inputDni')
var ejercicio1__submit = document.getElementById('ejercicio1__submit')
var ejercicio1__mensajes = document.getElementById('ejercicio1__mensajes')


ejercicio1__submit.addEventListener('click', almacenarNumeroLetra)


function almacenarNumeroLetra()
{
	var enteros = ['-',1,2,3,4,5,6,7,8,9,0]
	var dni = inputDni.value.trim()
	var dniNumero = ''

	for(var i=0; i < dni.length; i++) // Revisamos los caracteres introducidos
	{
		for(var x=0; x < enteros.length; x++) // Separamos las cifras de la letra
		{
			if(dni[i] == enteros[x])
			dniNumero += dni[i] // <---------- Almacenamos el DNI

			else
			dniLetra = dni[i] //   <---------- Almacenamos la letra
		}
	}

	inputDni.value = ''

	validarNumero(dniNumero, dniLetra)
}





function validarNumero(numero, letra) 
{
	var numeroParseado = Number(numero)

	if(numeroParseado< 0 || numeroParseado > 99999999) // Valida el tamaño del número
	{
		ejercicio1__mensajes.innerHTML = 'El número no es válido'

		setTimeout(function()
		{
			ejercicio1__mensajes.innerHTML = ''
		}, 3000)
	}
	else
	{
		calcularLetra(numeroParseado, letra)
	}
}





function calcularLetra(numero, letra)
{
	var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
	var letraMayuscula = letra.toUpperCase()


	var resto = numero % 23 // Obtenemos el resto


	for(var i=0; i <= resto; i++) // Guardamos la letra correspondiente al resto
	var letra = letras[i]
	


	if(letra == letraMayuscula) // Compraramos las letras e imprimimos los mensajes correspondientes
	ejercicio1__mensajes.innerHTML = numero + letraMayuscula + " - Número y letra correctos"
	
	else
	ejercicio1__mensajes.innerHTML =  "La letra " + letraMayuscula + " no es correcta"



	setTimeout(function()
	{
		ejercicio1__mensajes.innerHTML = ''
	}, 3000)
}