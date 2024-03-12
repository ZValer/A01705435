const db = require('../util/database');

module.exports = class Producto {
    // Constructor de la clase
    constructor(mi_clase, mi_precio, mi_imagen) {
        this.clase = mi_clase;
        this.precioProducto = mi_precio;
        this.imagen = mi_imagen;
    }

    // Este método sirve para guardar el último producto agregado
    save () {
        productosCatalogo.push({
            clase: this.clase,
            precioProducto: this.precioProducto, 
            imagen: this.imagen,
        });
    }

    // Método que devuelve los objetos del almacenamiento persistente
    static fetchAll() {
        //return productosCatalogo;
        return db.execute('Select * from producto')
    }
}

