let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')

/* GET index cargaProductos */
router.get('/', controller.index)

router.get('/cargaProducto', controller.cargaProducto)

router.get('/modificacionProducto', controller.modificacionProducto)

router.get('/users', controller.usuarios);
router.get('/productos', controller.productos);

let create = 3



let editForm = 1
let editProd = 2
let delet = 1

module.exports = router;