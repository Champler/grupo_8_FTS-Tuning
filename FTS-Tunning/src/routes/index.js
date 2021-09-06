var express = require('express');
var router = express.Router();
let controller = require('../controllers/homeController')
/* GET home page. */
router.get('/', controller.index);
router.get('/busqueda', controller.busqueda)
module.exports = router;
