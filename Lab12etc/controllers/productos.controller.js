const Producto = require('../models/producto.model');

exports.get_agregarProducto = (request, response, next) => {
    response.render('agregarProducto', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.post_agregarProducto = (request, response, next) => {
    console.log(request.body);
    const mi_producto = new Producto(
        request.body.clase, 
        request.body.precioProducto, 
        request.body.imagen
    );
    
    mi_producto.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultimo_producto=' + mi_producto.clase + '; HttpOnly');
            response.redirect('/catalogo');
        }).catch((error) => {
            console.log(error);
        });

};

exports.get_catalogo = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultimo_producto);

    //Producto.fetchAll().then(([rows, fieldData]) => {
        Producto.fetch(request.params.IDProducto).then(([rows, fieldData]) => {
        //console.log(fieldData);
        response.render('catalogo', {
            producto: rows, 
            ultimo_producto: request.cookies.ultimo_producto || '',
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error)
    });
};