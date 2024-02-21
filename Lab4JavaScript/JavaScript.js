/* 1
Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida
*/

var numero = parseInt(prompt("Ingresa un número: "));

document.write("<table>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (var i = 1; i <= numero; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");
}

document.write("</table>");

/* 2
Entrada: Usando un prompt se pide el resultado de la suma de 2 números 
generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, 
y el tiempo que tardó el usuario en escribir la respuesta.
*/

var tiempoInicio = new Date().getTime();

var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var suma = num1 + num2;
var respuesta = parseInt(prompt( num1 + " + "+ num2 + "?"));

var tiempoFinal = new Date().getTime();
var tiempo = (tiempoFinal - tiempoInicio) / 1000;

if (respuesta === suma) {
    document.write("¡Correcto! <br>");
} else {
    document.write("Incorrecto. "+ num1 + " + " + num2 + " = " + suma + ". No es " + respuesta +". <br>");
}

document.write("Tiempo en realizar la suma: " + tiempo + " segundos");

/* 3
Función: contador. 
Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, 
y la cantidad de valores mayores a 0 en el arreglo.
*/

function contador(arreglo) {
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }

    return [negativos, ceros, mayoresCero];
}

var arreglo1 = [1, 2, 3, 0, -1, -2, 0, 4];
var resultadoEsperado = [2, 2, 4];
console.assert(JSON.stringify(contador(arreglo1)) === JSON.stringify(resultadoEsperado), "Caso de prueba fallido");


/* 4
Función: promedios. 
Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

*/

function promedios(arreglo) {
    var promedios = [];

    for (var i = 0; i < arreglo.length; i++) {
        var suma = 0;
        for (var j = 0; j < arreglo[i].length; j++) {
            suma += arreglo[i][j];
        }
        promedios.push(suma / arreglo[i].length);
    }

    return promedios;
}

/* 5
Función: inverso. 
Parámetros: Un número. 
Regresa: El número con sus dígitos en orden inverso.
*/

function inverso(numero) {
    var numString = numero.toString();
    var numInverso = "";

    for (var i = numString.length - 1; i >= 0; i--) {
        numInverso += numString[i];
    }

    return parseInt(numInverso);
}

/* 6
Problema de tu elección. El problema debe estar descrito en un documento HTML, 
y la solución implementada en JavaScript, utilizando al menos la creación de 
un objeto, el objeto además de su constructor deben tener al menos 2 métodos. 
Muestra los resultados en el documento HTML.
*/

// Definición del objeto Tarea
function Tarea(id, descripcion, completada) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = completada;
}

// Métodos del objeto Tarea
Tarea.prototype.marcarComoCompletada = function() {
    this.completada = true;
};

Tarea.prototype.eliminar = function() {
    // Aquí iría la lógica para eliminar la tarea, por ejemplo, de una lista de tareas
};

// Función para generar un ID único para cada tarea
function generarIdUnico() {
    // Esta es una implementación simple para generar IDs únicos,
    // pero en un entorno de producción deberías utilizar una solución más robusta
    return Date.now();
}

// Función para agregar una nueva tarea a la lista
function agregarTarea() {
    var nuevaTareaInput = document.getElementById("nuevaTareaInput");
    var descripcion = nuevaTareaInput.value.trim();

    if (descripcion !== "") {
        var nuevaTarea = new Tarea(generarIdUnico(), descripcion, false);
        // Agregar la nueva tarea a la lista
        mostrarTareaEnLista(nuevaTarea);
        nuevaTareaInput.value = ""; // Limpiar el campo de entrada después de agregar la tarea
    }
}

// Función para mostrar una tarea en la lista
function mostrarTareaEnLista(tarea) {
    var listaTareas = document.getElementById("listaTareas");
    var nuevaTareaElemento = document.createElement("li");
    nuevaTareaElemento.textContent = tarea.descripcion;
    listaTareas.appendChild(nuevaTareaElemento);
}

