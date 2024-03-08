const express = require('express');
const app = express();

const url = require('url'); // Agregado
const querystring = require('querystring'); // Agregado

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});
  
const rutasClases = require('./routes/clases.routes');
app.use('/', rutasClases);

const path = require('path');
// Si no existe la URL html de error 404
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); //Manda la respuesta
});

app.listen(3000);