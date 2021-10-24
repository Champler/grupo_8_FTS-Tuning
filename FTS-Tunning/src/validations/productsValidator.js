const { check } = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('name').custom(value => {
        return db.Product.findOne({
            where : {
                name: value
            }
        })
        .then(product => {
            if(product){
                return Promise.reject("El nombre ya esta registrado")
            }
        })
    })
        .notEmpty().withMessage("Este campo es obligatorio").bail()
        .isLength({ min: 5 }).withMessage("El nombre del producto debe tener como mínimo 5 caracteres"),
   
    check('price')
        .isLength({ min:1 }).withMessage("Este campo es obligatorio"),
    
    check('brand')
        .notEmpty().withMessage("Debes elegir una modelo de automóvil").bail()
        .isLength({ min: 4 }).withMessage("La marca debe tener como mínimo 4 caracteres"),

    check('carModel')
        .notEmpty().withMessage("Debes elegir una modelo de automóvil").bail()
        .isLength({ min: 4 }).withMessage("El modelo debe tener como mínimo 4 caracteres"),

    check('description')
        .notEmpty().withMessage("Debes agregar una descripción del producto").bail()
        .isLength({ min: 20 }).withMessage("La descripción debe tener como mínimo 20 caracteres")
]
