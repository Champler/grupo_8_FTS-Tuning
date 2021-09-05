
const {  validationResult}= require("express-validator")


let { users, writeUsersJson} = require('../data/usersDB.js')

const bcrypt = require('bcryptjs')


module.exports = {
    historial: (req, res) => {
        res.render('users/historialCompras', {title: "Historial", session: req.session ? req.session : ""})
    },
    login: (req, res) => {
        res.render('users/Login', {title: "Login", session: req.session ? req.session : ""})
    },
    register: (req,res) =>{
        res.render('users/registro', {title: "registro", session: req.session ? req.session : ""})
    },
    profile: (req, res) =>{
        let user = users.find(user=> user.id === req.session.user.id);
        res.render('userProfile', {
            title: "profile",
            session: req.session ? req.session : "",
            user
        })
    },
    


    processLogin: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
            req.session.user = {
             id: user.id,
             userName: user.firstName + " " + user.lastName,
             email: user.email,
             avatar: user.image,
             rol: user.rol
         }
         /** creamos la cookie */
         if(req.body.remember){
             res.cookie('cookieFTS', req.session.user, {maxAge: 1000*60*10})
         }
         /------------------/
         /** guardamos el usuario en locals */
         res.locals.user = req.session.user
         /**redireccionamos al home si todo esta ok */
         res.redirect('/')
         
         /**sino -> */
        }else{
            res.render('users/Login', {
                title: "Login",
                errors: errors.mapped(),
                session: req.session ? req.session : ""
            })
        }

    },

   
    
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
                name,
                lastName, 
                email,
                password1
            } = req.body
    
            let newUser = {
                id: lastID +1,
                firstName: name,
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
                session: req.session ? req.session : ""
            })
        }

       
    },
    accountEdit: (req, res) => {
        res.render('users/accountEdit', {title: "Edita tu cuenta", session: req.session ? req.session : ""})
    }
}

