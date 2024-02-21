alert("Bienvenido al Laboratorio 4: Fundamentos de JavaScript. ¿Desea continuar?"); 

/* 1
Entrada: un número pedido con un prompt. 
Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
Utiliza document.write para producir la salida
*/

var numero = parseInt(prompt("Ejercicio 1: Ingresa un número n para obtener los cuadrados y cubos de 1-n: "));

document.write("<table>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

for (var i = 1; i <= numero; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");
}

document.write("</table>"); //Despliega la tabla al final del html

/* 2
Entrada: Usando un prompt se pide el resultado de la suma de 2 números 
generados de manera aleatoria. 
Salida: La página debe indicar si el resultado fue correcto o incorrecto, 
y el tiempo que tardó el usuario en escribir la respuesta.
*/
alert("Ejercicio 2: Realiza la siguiente suma, se te contará el tiempo"); 
var tiempoInicio = new Date().getTime(); //Toma el tiempo inicial

var num1 = Math.floor(Math.random() * 100); //Genera un número entero aleatorio de 0-99
var num2 = Math.floor(Math.random() * 10); //Genera un número entero aleatorio de 0-9
var suma = num1 + num2;
var respuesta = parseInt(prompt( num1 + " + "+ num2 + "?")); //Esto se convierte en un número entero

var tiempoFinal = new Date().getTime(); //Toma el tiempo final
var tiempo = (tiempoFinal - tiempoInicio) / 1000;

var ejercicio2 = document.getElementById("ejercicio2");

ejercicio2.insertAdjacentHTML('afterend', "Tiempo en realizar la suma: " + tiempo + " segundos");

if (respuesta === suma) {
    ejercicio2.insertAdjacentHTML('afterend', "¡Correcto! "+ num1 + " + " + num2 + " = " + suma + "<br>");
} else {
    ejercicio2.insertAdjacentHTML('afterend', "Incorrecto. "+ num1 + " + " + num2 + " = " + suma + ". No es " + respuesta +". <br>");
}


/* 3
Función: contador. 
Parámetros: Un arreglo de números. 
Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, 
y la cantidad de valores mayores a 0 en el arreglo.
*/

function contador() {
    var numInput = document.getElementById('numeros').value;
    var arreglo = numInput.split(',').map(Number); // Convierte los números ingresados en un arreglo numérico

    //Inicializa variables
    var negativos = 0;
    var ceros = 0;
    var mayoresCero = 0;

    for (var i = 0; i < arreglo.length; i++) { //Recorre el arreglo para clasificar los números
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    }

    var resultadoContador = document.getElementById('resultadoContador');
    //Despliega resultados
    resultadoContador.innerHTML = "Números negativos: " + negativos + "<br>" +
                                  "Cantidad de ceros: " + ceros + "<br>" +
                                  "Números positivos: " + mayoresCero;
}

/* 4
Función: promedios. 
Parámetros: Un arreglo de arreglos de números. 
Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

*/

function promedios() {
    var arregloInput = document.getElementById('arregloNumeros').value;
    var arreglo = arregloInput.split(';').map(function(subarray) {
        return subarray.split(',').map(Number);
    }); //Convierte el input a un arreglo de arreglos númericos

    var promedios = [];

    for (var i = 0; i < arreglo.length; i++) {
        var suma = 0;
        for (var j = 0; j < arreglo[i].length; j++) {
            suma += arreglo[i][j];
        }
        promedios.push(suma / arreglo[i].length); //promedio de cada arreglo se añade al arreglo de promedios
    }

    var resultadoPromedios = document.getElementById('resultadoPromedios');
    resultadoPromedios.innerHTML = "Promedios de cada arreglo: <br>" + promedios.join('<br>');
}

/* 5
Función: inverso. 
Parámetros: Un número. 
Regresa: El número con sus dígitos en orden inverso.
*/

function inverso() {
    var numero = document.getElementById('numero').value;
    var numInverso = "";

    for (var i = numero.length - 1; i >= 0; i--) {
        numInverso += numero[i]; //Añade los digitos del número al inverso
    }

    var resultadoInverso = document.getElementById('resultadoInverso');
    resultadoInverso.innerHTML = "Número con sus dígitos en orden inverso: " + numInverso;
}

/* 6
Problema de tu elección. El problema debe estar descrito en un documento HTML, 
y la solución implementada en JavaScript, utilizando al menos la creación de 
un objeto, el objeto además de su constructor deben tener al menos 2 métodos. 
Muestra los resultados en el documento HTML.
*/

// Definición del objeto Tarea
function Tarea(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
}

// Función para generar un ID único para cada tarea
function generarIdUnico() {
    return Date.now();
}

// Función para agregar una nueva tarea a la lista
function agregarTarea() {
    var nuevaTareaInput = document.getElementById("nuevaTareaInput");
    var descripcion = nuevaTareaInput.value;

    if (descripcion !== "") {
        var nuevaTarea = new Tarea(generarIdUnico(), descripcion); //Creo objeto de tarea
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

