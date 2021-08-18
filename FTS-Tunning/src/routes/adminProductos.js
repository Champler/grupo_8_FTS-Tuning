let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')


let upload = require('../middlewares/uploadProdFiles')

/* GET index cargaProductos */

router.get('/cargaProducto', controller.cargaProducto)
router.post('/cargaProducto',upload.array('img'), controller.create)

router.get('/modificacionProducto', controller.modificacionProducto)

router.get('/users', controller.usuarios);
router.get('/productos', controller.productos);




let editForm = 1
let editProd = 2
let delet = 1

module.exports = router;