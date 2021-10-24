const { check } = require('express-validator');


module.exports = [
    check("firstName").isLength({ min: 3 }).withMessage("El nombre es requerido"),
    check("lastName").isLength({ min: 3 }).withMessage("El apellido es requerido"),
]