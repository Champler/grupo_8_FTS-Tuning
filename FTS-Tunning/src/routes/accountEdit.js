var express = require('express');
var router = express.Router();
let controller = require('../controllers/accountEditController')


router.get('/', controller.accountEdit);

module.exports = router;
