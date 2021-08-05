let express = require('express');
let router = express.Router();
let controller = require('../controllers/productosController')

/* GET */
router.get('/', controller.index);

router.get('/producto', controller.producto);

router.get('/productoDetalle/:idProducto', controller.detalle);

module.exports = router;