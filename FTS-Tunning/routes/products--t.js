var express = require('express');
var router = express.Router();
let controller = require('../controllers/products-t')


router.get('/', controller.productos);

module.exports = router;
