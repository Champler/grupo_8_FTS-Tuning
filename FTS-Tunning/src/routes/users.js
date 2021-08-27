var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
/* GET users listing */
router.get('/historial', controller.historial)
router.get('/login', controller.login)
router.get('/register', controller.register)
router.post('/register', controller.newUser)
router.get('/profile', controller.accountEdit);

module.exports = router;
