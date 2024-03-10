const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productos.controller');

router.get('/agregarProducto', productosController.get_agregarProducto);

router.post('/agregarProducto', productosController.post_agregarProducto);
router.get('/catalogo', productosController.get_catalogo);


// Agregar respuesta a ruta raiz
router.get('/',(request, response, next) => {
    response.render('pagInicio', {
        username: request.session.username || '',
    });
});

module.exports = router;