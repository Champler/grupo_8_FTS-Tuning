let express = require('express');
let router = express.Router();
let controller = require('../controllers/cargaProductosController')

router.get('/', controller.index)


module.exports = router;