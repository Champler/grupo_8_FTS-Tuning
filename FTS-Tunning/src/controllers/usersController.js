let { users, writeUsersJson} = require('../data/usersDB.js')
const {validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')


module.exports = {
    historial: (req, res) => {
        res.render('users/historialCompras', {title: "Historial"})
    },
    login: (req, res) => {
        res.render('users/Login', {title: "Login"})
    },
    register: (req,res) =>{
        res.render('users/registro', {title: "Registro"})
    },
    newUser: (req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            lastID = 0
            users.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            });
        }

        let{
            firstName,
            lastName, 
            email,
            password
        } = req.body

        let newUser = {
            id: lastID +1,
            firstName,
            lastName,
            email, 
            password: bcrypt.hashSync(password, 10),
            rol: 'user',
            image: "default-image.png",
            address: "",
            PisoDpto: ''
        }

        users.push(newUser)

        writeUsersJson(users)
        
        res.redirect('/users/login')
    },
    accountEdit: (req, res) => {
        res.render('users/accountEdit', {title: "Edita tu cuenta"})
    }
}

