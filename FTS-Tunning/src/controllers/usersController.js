
let { users, writeUsersJson} = require('../data/usersDB.js')
const {  validationResult}= require("express-validator")

const bcrypt = require('bcryptjs')
const session = require("express-session")
const db = require('../database/models')


module.exports = {
    historial: (req, res) => {
        res.render('users/historialCompras', {
            title: "Historial", 
            session: req.session ? req.session : ""})
    },
    login: (req, res) => {
        res.render('users/Login', {title: "Login", session: req.session ? req.session : ""})
    },
    register: (req,res) =>{
        res.render('users/registro', {title: "registro", session: req.session ? req.session : ""})
    },
    
    processLogin: (req, res) => {
        let errors = validationResult(req)
        
        if(errors.isEmpty()){
            
            db.User.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then(user=>{
                req.session.user = {
                    id: user.id,
                    userName: user.firstName + " " + user.lastName,
                    avatar: user.image,
                    rol: user.rol
                }
                /** creamos la cookie */
                if(req.body.remember){
                   res.cookie('cookieFTS', req.session.user, {maxAge: 1000*60})
                }
                /------------------/
                /** guardamos el usuario en locals */
                res.locals.user = req.session.user
                /**redireccionamos al home si todo esta ok */
                res.redirect('/')
            })
            .catch(err=> console.log(err))
         
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
            let{
                name,
                lastName, 
                email,
                password1
            } = req.body
    
            db.User.create(
                {
                    firstName: name,
                    lastName,
                    email, 
                    password: bcrypt.hashSync(password1, 10),
                    rol: 'user',
                    image: "default-image.png",
                    telephone: ''
                }
            )
                .then(()=>{
                    res.redirect('/users/login')
                })
                .catch(err=> console.log(err))

        }else{
            res.render('users/registro', {
                title: "Registro",
                errors :errors.mapped(),
                old : req.body,
                session: req.session ? req.session : ""
            })
        }
    },
    accountEdit: (req, res) => {
        let user = users.find(user=> user.id === req.session.user.id)
        res.render('users/accountEdit', {title: "Edita tu cuenta", session: req.session ? req.session : "", user})
    },
    userEdit: (req,res) =>{
        let user = users.find(user=> user.id === req.session.user.id)
    
        user.id = user.id
        user.firstName = req.body.firstName,
        user.lastName = req.body.lastName,
        user.address = req.body.address,
        user.cp = req.body.cp,
        user.provincia = req.body.provincia,
        user.localidad = req.body.localidad
                    
        writeUsersJson(users)
    
        req.session.user = {
            id: user.id,
            userName: user.firstName + " " + user.lastName,
            avatar: user.image,
            rol: user.rol
        }
    
        res.locals.user = req.session.user
        res.redirect('/')
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.cookieFTS){
            res.cookie('cookieFTS','',{maxAge:-1})
        }
        
        res.redirect('/')
    }
}