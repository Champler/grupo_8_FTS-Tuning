let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')


let upload = require('../middlewares/uploadProdFiles')

/* GET index cargaProductos */
router.get('/', controller.index)

router.get('/cargaProducto', controller.cargaProducto)
router.post('/cargaProducto',upload.array('img'), controller.create)

router.get('/modificacionProducto', controller.modificacionProducto)

router.get('/users', controller.usuarios);
router.get('/productos', controller.productos);




/* GET / mostrar datos de edicion */
router.get('/editarProducto/:id', controller.editForm)
/* PUT - Recibe los datos de edicion */
router.put('/editarProducto/:id', controller.editProduct)

/* / Borrar un producto */
router.delete('/eliminarProducto/:id', controller.delete)

module.exports = router;