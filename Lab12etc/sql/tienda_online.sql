CREATE DATABASE Tienda_Online;
USE Tienda_Online;

CREATE TABLE Producto (
	IDProducto INT NOT NULL AUTO_INCREMENT,
    Clase VARCHAR(50),
    Precio INT,
    Imagen VARCHAR(255),
    PRIMARY KEY (IDProducto)
);

CREATE TABLE Usuario (
	IDUsuario INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20),
    NombreCompleto VARCHAR(100),
    Contraseña VARCHAR(255),
    PRIMARY KEY (IDUsuario)
);

CREATE TABLE Compra (
	IDProducto INT,
    IDUsuario INT,
    Fecha DATE,
    PRIMARY KEY (IDProducto, IDUsuario, Fecha),
    FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto),
	FOREIGN KEY (IDUsuario) REFERENCES Usuario(IDUsuario)
);



