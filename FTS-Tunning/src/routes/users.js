var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
profile,
login,
processLogin,
proccesRegister,
logout
} = require('../controllers/usersController')
let  loginValidator = require("../validations/loginValidator") 
let  registerValidator = require("../validations/registerValidator") 
let userSession = require("../middlewares/userSession")

/* GET users listing */
router.get('/historial', controller.historial)



router.get('/login',login)
router.post('/login',loginValidator,processLogin )

router.get('/register',register)
router.post('/register', registerValidator, proccesRegister)

router.get('/profile',userSession ,profile);
router.get('/logout', logout);

module.exports = router;
