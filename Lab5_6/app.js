// Escribe, prueba y ejecuta con node, scripts de js para los siguientes ejercicios y problemas. 
// Muestra los resultados en consola:

// Función que reciba un arreglo de números y devuelva su promedio.
function calcularPromedio(numeros) {
    // Verificar si el arreglo está vacío
    if (numeros.length === 0) {
        return 0; 
    }
    // Calcular el promedio
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

// Arreglo de números de ejemplo
const numeros = [10, 20, 30, 40, 50];
// Calcular el promedio con la función calcularPromedio
const promedio = calcularPromedio(numeros);
// Mostrar el resultado en la consola
console.log("El promedio es:", promedio);

//---------------------------------------------------------------------------

// Importar el módulo fs (file system) para manejar archivos
const fs = require('fs');
// Función para escribir un texto en un archivo
function escribirEnArchivo(texto, nombreArchivo) {
    // Escribir el texto en el archivo especificado
    fs.writeFile(nombreArchivo, texto, (err) => {
        // Verificar si hubo un error al escribir en el archivo
        if (err) {
            console.error("Error al escribir en el archivo:", err); // Mostrar el error en la consola
            return;
        }
        // Si no hay error, mostrar un mensaje de éxito en la consola
        console.log("El texto se ha escrito correctamente en el archivo:", nombreArchivo);
    });
}

// Texto que se escribirá en el archivo
const textoAEscribir = "Este es un texto de ejemplo que será escrito en un archivo.";
const nombreArchivo = "archivo.txt";

// Llamar a la función para escribir en el archivo
escribirEnArchivo(textoAEscribir, nombreArchivo);

//---------------------------------------------------------------------------

// Escoge algún problema que hayas implementado en otro lenguaje de programación, y 
// dale una solución en js que se ejecute sobre node.

// Función para contar los caracteres repetidos en un texto y devolver el recuento de cada uno.
function contarCaracteresRepetidos(texto) {
    // Objeto para almacenar el recuento de caracteres.
    const contador = {};
    // Iterar sobre cada caracter del texto.
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i]; // Caracter actual en la iteración.
        // Si el caracter ya está en el contador, incrementar su recuento.
        if (contador[caracter]) {
            contador[caracter]++;
        } else { // Si no está en el contador, inicializar su recuento en 1.
            contador[caracter] = 1;
        }
    }
    return contador;
}

// Texto de ejemplo.
const texto = "programación en JavaScript";

// Llamar a la función para contar caracteres repetidos.
const caracteresRepetidos = contarCaracteresRepetidos(texto);

// Imprimir el resultado en la consola.
console.log("Caracteres repetidos:", caracteresRepetidos);


