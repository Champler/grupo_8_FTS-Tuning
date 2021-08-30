const { check, body } = require('express-validator');
const {users} = require('../data/../data/usersDB');
const bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom(value => {
        let user = users.find(user => user.email == value);
        if(user !== undefined){
         return true
        }else{
            return false
        }
    })
    .withMessage('El email no coincide con un usuario ya registrado'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) =>{
            let user = users.find(user => user.email === req.body.email)
            return bcrypt.compareSync(value, user.password1)
        })
   .withMessage('La contraseña no coincide con el usuario')
]