const {check, body} = require("express-validator")
const{users} = require("../data/usersDB")
module.exports = [
check("email")
.isEmail()
.withMessage("debes ingresar un email valido"),


check("pass")
.notEmpty()
.withMessage("debess escribir tu contraseña")


 ]
