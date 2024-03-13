const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const productosController = require('../controllers/productos.controller');

router.get('/agregarProducto', isAuth, productosController.get_agregarProducto);
router.post('/agregarProducto', isAuth, productosController.post_agregarProducto);
router.get('/catalogo/:IDProducto', isAuth, productosController.get_catalogo);
router.get('/catalogo', isAuth, productosController.get_catalogo);


// Agregar respuesta a ruta raiz
router.get('/', isAuth, (request, response, next) => {
    response.render('pagInicio', {
        username: request.session.username || '',
    });
});

module.exports = router;