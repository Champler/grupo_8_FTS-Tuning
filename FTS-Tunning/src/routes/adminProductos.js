let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')

let userAdminCheck = require('../middlewares/userAdminCheck')
let upload = require('../middlewares/uploadProdFiles')

/* GET index cargaProductos */

router.get('/cargaProducto', userAdminCheck,controller.cargaProducto)
router.post('/cargaProducto',upload.array('img'), controller.create)

router.get('/modificacionProducto', userAdminCheck,controller.modificacionProducto)

router.get('/users', userAdminCheck,controller.usuarios);
router.get('/productos', userAdminCheck,controller.productos);




/* GET / mostrar datos de edicion */
router.get('/editarProducto/:id', userAdminCheck,controller.editForm)
/* PUT - Recibe los datos de edicion */
router.put('/editarProducto/:id', upload.array('img'), controller.editProduct)

/* / Borrar un producto */
router.delete('/eliminarProducto/:id', controller.delete)


/* Editar el tipo de usuario */
router.put('/editarUsuario/:id', controller.editUser)
/* / Borrar un Usuario */
router.delete('/eliminarUsuario/:id', controller.deleteUser)
module.exports = router;