let express = require('express');
let router = express.Router();
let controller = require('../controllers/adminProductosController')
let userCreatedCheck = require("../middlewares/userCreatedCheck")     // Verifica si hay un usuario en sesión
let userAdminCheck = require('../middlewares/userAdminCheck')         // Verifica si el usuario es administrador
let upload = require('../middlewares/uploadProdFiles')
let productsValidator = require('../validations/productsValidator')

/* GET index cargaProductos */

router.get('/cargaProducto', userCreatedCheck, userAdminCheck,controller.cargaProducto)
router.post('/cargaProducto',upload.array('img'), productsValidator, controller.create)

router.get('/users', userCreatedCheck, userAdminCheck,controller.usuarios);
router.get('/productos', userCreatedCheck, userAdminCheck,controller.productos);

router.get('/search', controller.adminSearch)


/* GET / mostrar datos de edicion */
router.get('/editarProducto/:id', userCreatedCheck, userAdminCheck,controller.editForm)
/* PUT - Recibe los datos de edicion */
router.put('/editarProducto/:id', upload.array('img'), productsValidator, controller.editProduct)

/* / Borrar un producto */
router.delete('/eliminarProducto/:id', controller.delete)


/* Editar el tipo de usuario */
router.put('/editarUsuario/:id', controller.editUser)
/* / Borrar un Usuario */
router.delete('/eliminarUsuario/:id', controller.deleteUser)
module.exports = router;