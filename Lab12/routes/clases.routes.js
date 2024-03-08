const express = require('express');
const router = express.Router();

//Definir constantes
const html_header = `
<!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="utf-8">
            <title>Tienda virtual</title> 
            <!--Ajustes de dimensiones de pantalla-->
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!--Relacionar bootstrap-->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">    
            <!--Relacionar hoja de estilos extra--> 
            <link rel="stylesheet" href="estilos.css"> 
            <!--Fontfamily título-->
            <link href='https://fonts.googleapis.com/css?family=BhuTuka Expanded One' rel='stylesheet'>
            <style>
            /*--Estilos--*/
            /* Contenedor de imagenes del titulo */
            .contenedor-imagen-titulo {
                height: 45vh; /* Alto del contenedor */
                overflow: hidden; /* Oculta cualquier parte de la imagen que se salga del contenedor */
                padding: 0; /* Elimina cualquier padding */
            }

            /* Estilos adicionales para las imágenes */
            .img-fluid-inicio {
                width: 100%; /* Ajusta el ancho de la imagen al 100% del contenedor */
                height: auto; /* Hace que la altura de la imagen se ajuste automáticamente */
            }


            /* Título sobre la imagen */
            .titulo-sobre-imagenes {
                font-family: 'BhuTuka Expanded One'; font-weight: bold; font-size: 7vh;
                position: absolute; /* Establece el posicionamiento absoluto */
                top: 25%; /* Lo posiciona en la parte inferior del contenedor */
                padding: 5px 10px; /* Añade espacio alrededor del texto */
                color: #FFFF;
                background-color: rgba(0, 0, 0, 0.1); /* Color de fondo semi-transparente */
                width: 100vw; /* Abarca todo el ancho de la pantalla */
                text-align: center;
            }
            /* Cursivas */
            .cursivas{
                font-style: italic;
            }

            /* Info pag inicio */
            #info-pag{
                padding: 10%;
            }
            /* Carrusel */
            #carouselExampleAutoplaying{
                margin:20px;
            }

            /*--------------------------*/


            </style
        </head>
        <body>
            <!--NavBar-->
            <nav class="navbar bg-dark border-bottom navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">STYLEṨTREAM</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <!--Icono a la derecha aal hacer más pequeña la pantalla-->
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 200px;">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Inicio</a>
                    </li>
                    </li>
                    
                    <!--Dropdown button-->
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="catalogo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Catálogo
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="catalogo">Ropa</a></li>
                        <li><a class="dropdown-item" href="catalogo">Accesorios</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="catalogo">Carrito de compras</a></li>
                    </ul>

                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="agregarProducto">Agregar Producto</a>
                    </li>
                    
                </ul>
                
                </div>
            </div>
            </nav>
`
//<!--------------------------------------------------------------------------------------------------------->
const html_javascript = `
    <!--------------------------------------------------------------------------------------------------------->
    <!--Include bootstrap js to include popovers or dropdowns-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        // Obtenemos todos los botones de añadir
        const botonesAñadir = document.querySelectorAll('.botonAñadir');

        // Recorremos los botones y añadimos un event listener a cada uno
        botonesAñadir.forEach(function (boton) {
            boton.addEventListener('click', function () {
                // Obtenemos el nombre del producto y su precio
                const nombreProducto = boton.parentElement.querySelector('.card-title').innerText;
                const precioProducto = parseFloat(boton.parentElement.querySelector('#precioProducto_tienda').innerText);

                // Creamos un nuevo elemento de fila para la tabla del carrito
                const fila = document.createElement('tr');
                fila.innerHTML = 
                    '<td>' + nombreProducto + '</td>' +
                    '<td>$' + precioProducto.toFixed(2) + '</td>';


                // Añadimos la fila al cuerpo de la tabla del carrito
                document.querySelector('#carrito-body').appendChild(fila);

                // Actualizamos el precio total
                const precioTotal = calcularPrecioTotal();
                document.querySelector('#precio-total').innerText = '$' + precioTotal.toFixed(2);
            });
        });

        // Función para calcular el precio total del carrito
        function calcularPrecioTotal() {
            let precioTotal = 0;
            document.querySelectorAll('#carrito-body tr').forEach(function (fila) {
                precioTotal += parseFloat(fila.querySelector('td:nth-child(2)').innerText.slice(1));
            });
            return precioTotal;
        }
    });

    </script>
    </body>
    </html>

`
// Productos de ropa y accesorios del catálogo
const productosCatalogo = [
    {
        clase: "Camisa blanca", 
        precioProducto: 449, 
        imagen: "https://i.pinimg.com/474x/6d/f6/d5/6df6d5b1e9cd4167ad37b7a8557c1693.jpg",
    },
    {
        clase: "Pantalón de vestir azul marino", 
        precioProducto: 749, 
        imagen: "https://i.pinimg.com/474x/6f/af/e1/6fafe1996efa520a77372f8e01060ef6.jpg",
    },
    {
        clase: "Traje negro", 
        precioProducto: 1599, 
        imagen: "https://i.pinimg.com/474x/8c/e5/29/8ce529af57d3bc843755873c106d6361.jpg",
    },
    {
        clase: "Pantalón de vestir beige", 
        precioProducto: 699, 
        imagen: "https://i.pinimg.com/474x/4c/6b/5a/4c6b5ad613f217475971fa2aaa70a813.jpg",
    },
    {
        clase: "Suéter blanco", 
        precioProducto: 449, 
        imagen: "https://i.pinimg.com/474x/34/52/99/34529926f70b82e8e642df369aac3138.jpg",
    },
    {
        clase: "Anillos y collar dorados", 
        precioProducto: 1200, 
        imagen: "https://i.pinimg.com/474x/2b/00/c7/2b00c73c1f63dfef89a5605304f0337d.jpg",
    },
    {
        clase: "Pulsera dorada", 
        precioProducto: 299, 
        imagen: "https://i.pinimg.com/474x/66/22/a0/6622a0ff4b63f612a432a8c7f2ff3cf1.jpg",
    },
    {
        clase: "Conjunto anillos", 
        precioProducto: 399, 
        imagen: "https://i.pinimg.com/474x/d9/09/94/d909945d79dbd1affac05cca83d099d0.jpg",
    }
    
   
];

//-----------------------------------------------------------------------------------------

//Middlewares

router.get('/agregarProducto', (request, response, next) => {
    response.render('agregarProducto');
});

router.post('/agregarProducto', (request, response, next) => {
    console.log(request.body);
    productosCatalogo.push({
        clase: request.body.clase,
        precioProducto: request.body.precioProducto, 
        imagen: request.body.imagen,
    });
    response.redirect('/');
});

router.get('/catalogo',(request, response, next) => {
    response.render('catalogo', {
        productosCatalogo: productosCatalogo,
    });
});

// Agregar respuesta a ruta raiz
router.get('/',(request, response, next) => {
    response.render('pagInicio');
});

module.exports = router;