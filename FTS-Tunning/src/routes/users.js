var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
login,
processLogin,
newUser} = require('../controllers/usersController')
let  loginValidator = require("../validations/loginValidator") 
let  Validator = require("../validations/registerValidator") 

/* GET users listing */
router.get('/historial', controller.historial)







router.get('/login', controller.login)
router.post('/login',loginValidator, controller.newUser)
router.get('/register', controller.register)
router.post('/register', controller.newUser)
router.get('/profile', controller.accountEdit);



router.get('/register', controller.register)
router.post('/register',Validator, controller.newUser)
module.exports = router;
