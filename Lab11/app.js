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
app.listen(3000);