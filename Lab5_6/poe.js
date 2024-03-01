// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear una nueva fila en el carrito
    var fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>$${precio}</td>
    `;
    // Agregar la fila al cuerpo de la tabla del carrito
    document.getElementById('carrito-body').appendChild(fila);

    // Actualizar el precio total
    var precioTotal = parseFloat(document.getElementById('precio-total').innerText.replace('$', ''));
    precioTotal += parseFloat(precio);
    document.getElementById('precio-total').innerText = '$' + precioTotal.toFixed(2);
}

// Añadir eventos click a los botones de añadir
var botonesAgregar = document.querySelectorAll('.botonAñadir');
botonesAgregar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        var card = this.closest('.card');
        var nombre = card.querySelector('.card-title').innerText;
        var precio = card.querySelector('.card-text').innerText.replace('$', '');
        agregarAlCarrito(nombre, precio);
    });
});
