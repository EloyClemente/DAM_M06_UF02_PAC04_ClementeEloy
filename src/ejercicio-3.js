
var inputFecha  = document.getElementById('inputFecha')
var inputCodigo = document.getElementById('inputCodigo')
var ejercicio3__submit   = document.getElementById('ejercicio3__submit')
var ejercicio3__mensajes = document.getElementById('ejercicio3__mensajes')


ejercicio3__submit.addEventListener('click', validarFecha)



function validarFecha()
{
	var expresionFecha  = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/
	var expresionCodigo = /(([1-4][0-9][0-9][0-9][0-9])|(0(?=[1-9][0-9][0-9][0-9]))|(5(?=[0-2][0-9][0-9][0-9])))/

	var fecha  = inputFecha.value.trim() // Recoger datos
	var codigo = inputCodigo.value.trim()

	
	var validacionFecha  = fecha.match(expresionFecha) // Validar los datos
	var validacionCodigo = codigo.match(expresionCodigo)


	var capaFecha  = document.createElement('p') // Crear parrafos
	var capaCodigo = document.createElement('p')

	ejercicio3__mensajes.appendChild(capaFecha) // Insertar párrafos
	ejercicio3__mensajes.appendChild(capaCodigo)



	// Imprimir resultados
	// ===================================================

	if(validacionFecha != null)
	capaFecha.innerHTML = 'Formato de fecha correcto'
	
	else
	capaFecha.innerHTML = 'Formato de fecha incorrecto'


	if(validacionCodigo != null)
	capaCodigo.innerHTML = 'Formato de código correcto'
	
	else
	capaCodigo.innerHTML = 'Formato de código incorrecto'
	



	setTimeout(function()
	{
		ejercicio3__mensajes.innerHTML = ''
	}, 3000)


	inputFecha.value  = ''
	inputCodigo.value = ''
}













