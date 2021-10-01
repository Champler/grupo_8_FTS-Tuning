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
                    province: '',
                    address: '',
                    cp: '',
                    city: ''
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
        db.User.findOne({
            where: {
                id: req.session.user.id
            }
        })
        .then(user => {
            res.render('users/accountEdit', {title: "Edita tu cuenta", session: req.session, user})
        })
    },
    userEdit: (req,res) =>{
        db.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            cp: req.body.cp,
            province: req.body.provincia,
            city: req.body.localidad,
            image: req.file && req.file.filename
        },{
            where:{
                id: +req.session.user.id
            }
        })
        .then(user => {
            req.session.destroy();
            res.redirect('/users/login')
        })
        .catch(error =>res.send(error))
        
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.cookieFTS){
            res.cookie('cookieFTS','',{maxAge:-1})
        }
        
        res.redirect('/')
    }
}