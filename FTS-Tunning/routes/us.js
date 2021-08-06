var express = require('express');
var router = express.Router();
let controller = require('../controllers/usController')
/* GET home page. */
router.get('/', controller.us);
router.get('/contact', controller.contact);

module.exports = router;
