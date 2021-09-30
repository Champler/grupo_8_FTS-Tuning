const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email').custom(value => {
        db.User.findOne({
            where:{
                email: value
            }})
            .then(user => {
                if(user !== undefined){
                    return true
                   }else{
                       return false
                   }
            })
    })
    .withMessage('El email no coincide con un usuario ya registrado'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) =>{
        db.User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user => {
            return bcrypt.compareSync(value, user.password)
        })
        })
   .withMessage('La contraseña no coincide con el usuario')
]