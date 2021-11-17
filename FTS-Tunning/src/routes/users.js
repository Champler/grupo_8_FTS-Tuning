var express = require('express');
var router = express.Router();
let controller = require('../controllers/usersController')
const{register,
accountEdit,
login,
processLogin,
proccesRegister,
userEdit,
logout,
perfilUsers
} = require('../controllers/usersController')
let loginValidator = require("../validations/loginValidator") 
let registerValidator = require("../validations/registerValidator") 
let userCreatedCheck = require("../middlewares/userCreatedCheck")
let sessionExists = require("../middlewares/sessionExists")
let uploadAvatar = require('../middlewares/uploadAvatar')
let editValidator = require('../validations/editProfileValidator');
const { account, accout, perfil } = require('../controllers/usController');
const usController = require('../controllers/usController');
/* GET users listing */
router.get('/historial', userCreatedCheck,controller.historial)


router.get('/login', sessionExists,login)
router.post('/login',loginValidator,processLogin )

router.get('/register', sessionExists,register)
router.post('/register', registerValidator, proccesRegister)
router.get("/perfil",userCreatedCheck,perfilUsers)
router.get('/profile', userCreatedCheck, accountEdit);
router.put('/profile',uploadAvatar.single('Perfil'),editValidator, userEdit)
router.get('/logout', logout);
module.exports = router;