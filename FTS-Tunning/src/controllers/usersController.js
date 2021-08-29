
const {  validationResult}= require("express-validator")


let { users, writeUsersJson} = require('../data/usersDB.js')

const bcrypt = require('bcryptjs')


module.exports = {
    historial: (req, res) => {
        res.render('users/historialCompras', {title: "Historial"})
    },
    login: (req, res) => {
        res.render('users/Login', {title: "Login"})
    },
    register: (req,res) =>{
        res.render('users/registro', {title: "registro"})
    },
    


    /*processLogin: (req,res) =>{
         let errors = validationResult(req)
         
    },*/



   
    
    proccesRegister: (req,res) => {

        let errors = validationResult(req)

        if(errors.isEmpty()){

           let lastID = 0

            users.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            });

            let{
                firstName,
                lastName, 
                email,
                password1
            } = req.body
    
            let newUser = {
                id: lastID +1,
                firstName,
                lastName,
                email, 
                password1: bcrypt.hashSync(password1, 10),
                rol: 'user',
                image: "default-image.png",
                address: "",
                PisoDpto: ''
            }
    
            users.push(newUser)
    
            writeUsersJson(users)
            
            res.redirect('/users/login')
        }else{

            console.log("esto tiene errorwes",errors);
            res.render('users/registro', {
                title: "Registro",
                errors :errors.mapped(),
                old : req.body,
                session: req.session
            })
        }

       
    },
    accountEdit: (req, res) => {
        res.render('users/accountEdit', {title: "Edita tu cuenta"})
    }
}

