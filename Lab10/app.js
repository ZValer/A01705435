// Pequeña aplicación web que al enviar una petición al servidor, devuelve
// la página de laboratorio.
// esta responde a rutas diferentes

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
    // Función para agregar un producto al carrito
    // Estado inicial del carrito
    var carrito = [];

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombre, precio) {
        // Agregar el producto al estado del carrito
        carrito.push({ nombre: nombre, precio: parseFloat(precio) });
        
        // Actualizar la visualización del carrito
        actualizarCarrito();
    }

    // Función para actualizar la visualización del carrito
    function actualizarCarrito() {
        // Limpiar el cuerpo de la tabla del carrito
        var carritoBody = document.getElementById('carrito-body');
        carritoBody.innerHTML = '';

        // Iterar sobre los productos en el carrito y agregarlos a la tabla
        var precioTotal = 0;
        carrito.forEach(function(producto) {
            var fila = document.createElement('tr');
            fila.innerHTML = '<td>' + producto.nombre + '</td>' +
                            '<td>$' + producto.precio.toFixed(2) + '</td>';
            carritoBody.appendChild(fila);
            precioTotal += producto.precio;
        });

        // Actualizar el precio total
        document.getElementById('precio-total').innerText = '$' + precioTotal.toFixed(2);
    }

    // Obtener todos los botones de añadir del catálogo
    var botonesAgregar = document.querySelectorAll('.botonAñadir');

    // Añadir eventos click a los botones de añadir
    botonesAgregar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var card = this.closest('.card');
            var nombre = card.querySelector('.card-title').innerText;
            var precio = card.querySelector('.card-text').innerText.replace('$', '');
            agregarAlCarrito(nombre, precio);
        });
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

const http = require('http');
const server = http.createServer( (request, response) => {    
    console.log(request.url);
    // Si la url es igual a la raíz
    if (request.url == "/") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`
        <!--------------------------------------------------------------------------------------------------------->
        <!--Imagenes para el título en dos columnas-->
        <div class="container-fluid text-center">
        <div class="row justify-content-center no-gutters">
            <div class="col contenedor-imagen-titulo">
                <img src="https://i.pinimg.com/474x/12/e2/4d/12e24d187364a8b7c844750f9cfe4b90.jpg" class="img-fluid img-fluid-inicio" alt="Closeup arete">
                </div>
            <div class="col contenedor-imagen-titulo">
                <img src="https://i.pinimg.com/474x/9b/e6/46/9be646dc47ba4783ff92f5a5365c3495.jpg" class="img-fluid img-fluid-inicio" alt="Closeup atrás manos">
            </div>
        </div>
        </div>
        
        <!--Título-->
        <h2 class="titulo-sobre-imagenes">STYLEṨTREAM</h2>
        
        <!--------------------------------------------------------------------------------------------------------->
        <!--Bienvenida a la página--> 

        <div class="row">
        <!--Primera columna Bienvenida-->
        <div class="col-md-8 col-sm-12">
            <div id="info-pag">
                <h2 class="featurette-heading fw-normal lh-1">Bienvenido!</h2> <br><br>
                <p class="lead">
                    <span class="text-body-secondary">Stylestream,</span>
                    tu destino favorito para sumergirte en el mundo fascinante de la moda online! 
                    La moda es más que ropa: es una corriente de estilo en constante evolución que te invita a 
                    explorar y expresarte.<br>
                    En Stylestream, fusionamos la elegancia atemporal con las últimas tendencias, ofreciéndote 
                    una experiencia de compra única donde cada prenda cuenta una historia.<br><br>
                    <span class="cursivas">Navega a través del estilo con Stylestream.</span>
                </p> 
            </div>
        </div>
        <!--Otra columna-->
        <!--Carrusel de imágenes autodeslizante-->
        <div class="col-md-4 col-sm-12 order-md-2">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.pinimg.com/474x/a4/95/5c/a4955cf125c4e7758045c68f5b63e7a3.jpg" class="d-block w-100" alt="martini">
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/474x/d8/f0/76/d8f076fcf6e35223d617c9a2d66b3df0.jpg" class="d-block w-100" alt="tenis">
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/474x/24/9b/69/249b6943293ab129cc66753d2d6aa722.jpg" class="d-block w-100" alt="traje gris">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- /carrusel -->
        </div>
    
        <!--------------------------------------------------------------------------------------------------------->
        <!--Linea divisora-->
        <hr class="featurette-divider">
        <!--Info con imagen a la izquierda-->
        <div class="row featurette">
        <div class="col-md-7 order-md-2"> <!--orden-md-2 indica que va en la segunda columna-->
            <div id="info-pag">
            <p class="lead">
                <h2><span class="text-body-secondary">Ropa</span></h2> <br><br>
                Explora la sección de ropa! 
                Nuestra amplia selección de ropa te ofrece la oportunidad de expresar tu personalidad y destacar tu estilo. 
                Descubre prendas de alta calidad con cortes y diseños que se adaptan a todas las ocasiones, 
                todo cuidadosamente seleccionado para satisfacer tus gustos y necesidades.
                
            </p> 
            </div>
        </div>
        <!--Imagen circular-->
        <div class="col-md-4 order-md-1"> <!--Primera columna-->
            <div class="d-flex justify-content-center align-items-center">
            <img src="https://i.pinimg.com/474x/68/f5/53/68f5535df68857ff0d3dde6adeaeee8a.jpg" class="rounded-circle img-fluid" alt="Imagen circular closeup outfit" style="width: 400px; height: 400px;">
            </div>
        </div>
        </div>
        <!--------------------------------------------------------------------------------------------------------->
        <!--Linea divisora-->
        <hr class="featurette-divider">

        <!--Información de la página con imagen a la derecha-->
        <div class="row">
        <div class="col-md-7 col-sm-12">
            <div id="info-pag">
            <p class="lead">
                <h2><span class="text-body-secondary">Accesorios</span></h2> <br><br>
                Explora nuestra sección de accesorios y encuentra el toque perfecto para completar tu estilo. 
                Desde llamativos bolsos hasta delicadas joyas, nuestra colección de accesorios está diseñada 
                para realzar tu look y añadir un toque de sofisticación a cualquier conjunto. 
            </p> 
            </div>
        </div>
        <!--Segunda columa con imagen circular-->
        <div class="col-md-5 col-sm-12 text-center">
            <div class="d-flex justify-content-center align-items-center">
                <img src="https://i.pinimg.com/474x/6b/3a/b2/6b3ab2267859043e3d90fb69ba542db7.jpg" class="rounded-circle img-fluid" alt="Imagen circular mano con anillo" style="width: 400px; height: 400px;">
            </div>
        </div>
        </div>

        </div> 
    `);
    response.write(html_javascript);  
    response.end();
    
  } 
  // Si la url es igual a /catálogo
  else if (request.url == "/catalogo") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`<br> <h1 id="catalogoRopa" class="featurette-heading fw-normal lh-1">Catálogo</h1> <br>
    `);
    ///////
    response.write(`
    <!--Linea divisora-->
    <hr class="featurette-divider">

    <!--Productos en venta-->

    <div class="row">`
    );
      let html_productosCatalogo = '';
      for (let productoCatalogo of productosCatalogo) {
          html_productosCatalogo += `
          <!--Columna-->
            <div class="col-md-2 col-sm-4 card-producto">
                <!--Card-->
                <div class="card">
                <img id="imagen_barbaro" src="${productoCatalogo.imagen}" class="card-img-top" alt="Imagen de ${productoCatalogo.clase}">
                <div class="card-body">
                    <h5 class="card-title">${productoCatalogo.clase}</h5>
                    <p class="card-text">Precio: $<span id="precioProducto_barbaro">${productoCatalogo.precioProducto}</span></p>
                    <button id="boton_levelear_barbaro" class="btn btn-dark botonAñadir">Añadir</button>
            
                </div>
                </div>
                <!--/card-->
            </div>
          `;
      }
    response.write(html_productosCatalogo);
    response.write(`</div>

    `);
    //////////
    
    response.write(`
        <!--Linea divisora-->
        <hr class="featurette-divider">

        <!--Carrito de compras-->
        <br><h2 class="featurette-heading fw-normal lh-1">Carrito de compras</h2> <br><br>

        <table class="table">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody id="carrito-body">
            <!-- Aquí se agregarán los productos -->
        </tbody>
        <tfoot>
            <tr>
                <td><strong>Total</strong></td>
                <td id="precio-total">$0.00</td>
            </tr>
        </tfoot>
        </table>   
    `);

    response.write(html_javascript);  
    response.end();
  }
  
  // Si la url es igual a /agregarProducto
  else if (request.url == "/agregarProducto") {
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`<h2 class="title"><br>Agregar nuevos productos aqui...</h2>`);
    response.write(html_javascript);  
    response.end();
  }
    // Si la url no está definida
    else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write(html_header);
    response.write(`<h2 class="title"><br>Esta ruta no existe...</h2>`);
    response.write(html_javascript);  
    response.end();
  }
});


server.listen(3000);
