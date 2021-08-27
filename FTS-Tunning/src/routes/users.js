var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
login,
processLogin,
processRegister} = require('../controllers/accountEditController')
let  loginValidator = require("../validations/loginValidator") 
let  Validator = require("../validations/registerValidator") 

/* GET users listing */
router.get('/historial', controller.historial)







router.get('/login', controller.login)
router.post('/login',loginValidator, controller.proceesLogin)



router.get('/register', controller.register)
router.post('/register',Validator, controller.processRegister)
module.exports = router;
