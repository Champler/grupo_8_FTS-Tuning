const {check, body } = require("express-validator")
const{users} = require("../data/usersDB")

module.exports = [
check("name")
.notEmpty()
.withMessage("el nombre es requerido"),

check("email")
.isEmail()
.withMessage("debes ingresar un email valido"),

 body('email').custom(value => {
        let user = users.filter(user=>{ 
            return user.email == value 
        })
        
        if(user == false){ 
            return true 
        }else{
            return false 
        }
    })
    .withMessage('El email ya está registrado'),





check('psw')
.notEmpty()
.withMessage('Debes escribir tu contraseña') 
.isLength({
    min: 6,
    max: 12
})
.withMessage("la contraseña debe tener entre 6 y 12 caracteres"),






body('psw1').custom((value,{req})=>value !== req.body.psw1 ?false : true )
.withMessage("las contraseñas no coinciden"),






 ]
