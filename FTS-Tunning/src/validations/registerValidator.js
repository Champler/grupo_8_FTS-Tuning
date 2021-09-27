const {check, body } = require("express-validator")
//const{users} = require("../data/usersDB")
const db = require('../database/models')

module.exports = [
check("name")
.notEmpty()
.withMessage("el nombre es requerido"),

check("email")
.isEmail()
.withMessage("debes ingresar un email valido"),

 body('email').custom(value => {
    db.users.findOne({
        where : {
            email: value
        }
    })
    .then(user => {
        if(user){
            return Promise.reject ("El email ya esta registrado")
        }
    })
    }),

check('password1')
.notEmpty()
.withMessage('Debes escribir tu contraseña') 
.isLength({
    min: 6,
    max: 12
})
.withMessage("la contraseña debe tener entre 6 y 12 caracteres"),



body('password2').custom((value,{req})=>value !== req.body.password1 ? false : true )
.withMessage("las contraseñas no coinciden")
]
