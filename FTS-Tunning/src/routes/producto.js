let express = require('express');
let router = express.Router();
let controller = require('../controllers/productosController')
let userCreated = require('../middlewares/userCreatedCheck')
/* GET */

router.get('/', controller.producto);

router.get('/carrito', userCreated,controller.carrito)
router.get('/:idProducto', controller.detalle);
router.get('/categoria/:categoria?', controller.categoria)


module.exports = router;