
var ejercicio4__textarea = document.getElementById('ejercicio4__textarea')
var ejercicio4__submit = document.getElementById('ejercicio4__submit')
var ejercicio4__mensajes = document.getElementById('ejercicio4__mensajes')

ejercicio4__submit.addEventListener('click', almacenarPalabras)

function almacenarPalabras()
{
	var texto = ejercicio4__textarea.value.trim() // Obtenemos los datos
	var palabras = texto.split(" ") // Obtenemos el array con las palabras
	var todas = ''

	var primera = document.createElement('p') // Creamos los párrafos
	var ultima  = document.createElement('p')
	var numero  = document.createElement('p')
	var total   = document.createElement('p')

	ejercicio4__mensajes.appendChild(primera) // Insertamos los párrafos
	ejercicio4__mensajes.appendChild(ultima)
	ejercicio4__mensajes.appendChild(numero)

	primera.innerHTML = 'Primera: ' + palabras[0] // Insertamos los datos
	ultima.innerHTML  = 'Última: ' + palabras[palabras.length-1]
	numero.innerHTML  = 'Número de palabras: ' + palabras.length


	var palabrasSort = palabras.sort() // Ordenamos las palabras


	for(var i=0; i < palabrasSort.length; i++) // Las juntamos en un string
	todas += palabrasSort[i] + " "
	

	ejercicio4__mensajes.appendChild(total)
	total.innerHTML = 'Todas las palabras ordenadas: ' + todas // Imprimir palabras

	setTimeout(function()
	{
		ejercicio4__mensajes.innerHTML = ''
		ejercicio4__textarea.value = ''
	}, 20000)


	mostrarHora(todas) 
}




function mostrarHora(palabras)
{
	var tiempo   = new Date() 
	var horas    = tiempo.getHours()
	var minutos  = tiempo.getMinutes()
	var segundos = tiempo.getSeconds()


	var hora = horas + ':' + minutos + ':' + segundos // Creamos un reloj


	var capaHora = document.createElement('p')
	ejercicio4__mensajes.appendChild(capaHora)
	capaHora.innerHTML = 'Hora del sistema: ' + hora // Imprimir reloj
}