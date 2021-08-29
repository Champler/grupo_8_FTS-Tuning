var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
login,
processLogin,
proccesRegister} = require('../controllers/usersController')
let  loginValidator = require("../validations/loginValidator") 
let  registerValidator = require("../validations/registerValidator") 

/* GET users listing */
router.get('/historial', controller.historial)







router.get('/login', controller.login)
router.post('/login',loginValidator, )

router.get('/register',register)
router.post('/register', registerValidator, proccesRegister)

router.get('/profile', controller.accountEdit);

module.exports = router;
