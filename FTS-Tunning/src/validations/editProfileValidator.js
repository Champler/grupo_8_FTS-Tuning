const { check } = require('express-validator');


module.exports = [
    check("firstName").isLength({ min: 3 }).withMessage("El campo nombre es obligatorio"),
    check("lastName").isLength({ min: 3 }).withMessage("El campo apellido es obligatorio"),
]