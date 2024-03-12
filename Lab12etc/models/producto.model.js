/*
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
*/
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

