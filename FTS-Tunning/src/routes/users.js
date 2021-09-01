var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
profile,
login,
processLogin,
proccesRegister} = require('../controllers/usersController')
let loginValidator = require("../validations/loginValidator") 
let registerValidator = require("../validations/registerValidator") 
let userCreatedCheck = require("../middlewares/userCreatedCheck")
let sessionExists = require("../middlewares/sessionExists")
/* GET users listing */
router.get('/historial', userCreatedCheck,controller.historial)



router.get('/login', sessionExists,login)
router.post('/login',loginValidator,processLogin )

router.get('/register', sessionExists,register)
router.post('/register', registerValidator, proccesRegister)

router.get('/profile', userCreatedCheck,profile);

module.exports = router;
