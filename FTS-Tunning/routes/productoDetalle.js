let express = require('express');
let router = express.Router();
let controller = require('../controllers/productoDetalleController')

router.get('/', controller.index)


module.exports = router;