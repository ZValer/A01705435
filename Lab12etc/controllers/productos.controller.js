const Producto = require('../models/producto.model');

exports.get_agregarProducto = (request, response, next) => {
    response.render('agregarProducto');
};

exports.post_agregarProducto = (request, response, next) => {
    console.log(request.body);
    const mi_producto = new Producto(
        request.body.clase, 
        request.body.precioProducto, 
        request.body.imagen
    );
    mi_producto.save();
    response.redirect('/catalogo');
};

exports.get_catalogo = (request, response, next) => {
    response.render('catalogo', {
        productosCatalogo: Producto.fetchAll(),
    });
};