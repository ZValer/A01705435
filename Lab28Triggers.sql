USE lab20materiales;

CREATE TABLE Bitacora (
	idBitacora INT AUTO_INCREMENT NOT NULL,
    operacion VARCHAR(20),
    idClave int, 
    Fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (idBitacora),
    FOREIGN KEY (idClave) references materiales(clave)
);

DELIMITER //
CREATE TRIGGER registarBitacora
AFTER INSERT ON Materiales
FOR EACH ROW
BEGIN
    INSERT INTO Bitacora (idBitacora, operacion, idClave, Fecha)
    VALUES (DEFAULT, 'Alta material', NEW.clave, NOW());
END;
//
DELIMITER ;

INSERT INTO materiales(clave, descripcion, precio, impuesto, PorcentajeImpuesto) VALUES
(3000, 'cosa', 23, 23, 23);
INSERT INTO materiales(clave, descripcion, precio, impuesto, PorcentajeImpuesto) VALUES
(3100, 'cosa2', 277, 23, 23);


SELECT * FROM lab20materiales.bitacora;