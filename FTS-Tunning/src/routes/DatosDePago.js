var express = require('express');
var router = express.Router();
let controller = require('../controllers/DatosDePagoController')


router.get('/', controller.DatosDePago);

module.exports = router;
