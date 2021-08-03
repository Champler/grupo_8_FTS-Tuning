let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')

/* GET index cargaProductos */
router.get('/', controller.index)

router.get('/cargaProducto', controller.cargaProducto)

router.get('/modificacionProducto', controller.modificacionProducto)


module.exports = router;