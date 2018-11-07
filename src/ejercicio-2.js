
var ejercicio2__mensajes = document.getElementById('ejercicio2__mensajes')


function ProductosAlimenticios(codigo, nombre, precio)
{
	this.codigo = codigo
	this.nombre = nombre
	this.precio = precio

	this.imprimeDatos = function()
	{
		var capaCodigo = document.createElement('p')     // Creamos las capas
		var capaNombre = document.createElement('p')
		var capaPrecio = document.createElement('p')

		ejercicio2__mensajes.appendChild(capaCodigo)     // Insertamos las capas
		ejercicio2__mensajes.appendChild(capaNombre)
		ejercicio2__mensajes.appendChild(capaPrecio)

		capaCodigo.innerHTML = 'Código: ' + this.codigo  // Insertamos el texto
		capaNombre.innerHTML = 'Nombre: ' + this.nombre
		capaPrecio.innerHTML = 'Precio: ' + this.precio

		capaPrecio.classList.add('mensajes--margen')
	}
}


var manzana = new ProductosAlimenticios(1, 'Manzana', '1€') // Instanciamos los objetos
var pollo   = new ProductosAlimenticios(2, 'Pollo',   '10€')
var verdura = new ProductosAlimenticios(3, 'Verdura', '5€')


var productos = [manzana, pollo, verdura]


for(var i=0; i < productos.length; i++) // Imprimimos los datos
productos[i].imprimeDatos()




