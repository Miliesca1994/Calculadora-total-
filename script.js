// Variables obtenidas con querySelector()

const precio = document.querySelector("#precio");
const cantidad = document.querySelector("#cantidad");
const total = document.querySelector("#total");

// Precio base

const precioBase = Number(precio.innerHTML);

// Cantidad inicial

let cantidadProductos = Number(cantidad.innerHTML);

// Función para actualizar el total

function actualizarTotal() {

    total.innerHTML = precioBase * cantidadProductos;

}

// Botón +

function aumentar() {

    cantidadProductos++;

    cantidad.innerHTML = cantidadProductos;

    actualizarTotal();

}

// Botón -

function disminuir() {

    if (cantidadProductos > 1) {

        cantidadProductos--;

        cantidad.innerHTML = cantidadProductos;

        actualizarTotal();

    }

}

// Mostrar el total al cargar la página

actualizarTotal();