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



/* GET / mostrar datos de edicion */
router.get('/editarProducto/:id', controller.editForm)
/* PUT - Recibe los datos de edicion */
router.put('/editarProducto/:id', controller.editProduct)

/* / Borrar un producto */
router.delete('/eliminarProducto/:id', controller.delete)

module.exports = router;