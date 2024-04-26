const express = require('express');
const app = express();
const githubController = require('./controllers/githubController');

app.set('view engine', 'ejs');

app.get('/', githubController.getUser);

app.listen(3000);

