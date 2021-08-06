let express = require('express');
let router = express.Router();
let controller = require('../controllers/productosController')

/* GET */

router.get('/', controller.producto);

router.get('/carrito', controller.carrito)
router.get('/:idProducto', controller.detalle);

module.exports = router;