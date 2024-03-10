const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const url = require('url'); // Agregado
const querystring = require('querystring'); // Agregado

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const cookieParser = require('cookie-parser');
app.use(cookieParser());
  
const rutasClases = require('./routes/clases.routes');
app.use('/', rutasClases);

// Si no existe la URL html de error 404
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); //Manda la respuesta
});

app.listen(3000);