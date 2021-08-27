let db = require('../data/productsDataBase')
const {  validationResult}= require("express-validator")
let {categories, users} = require('../data/productsDataBase')
const usersDB = require('../data/usersDB')
module.exports = {
    historial: (req, res) => {
        res.render('historialCompras', {title: "Historial"})
    },
    login: (req, res) => {
        res.render('Login', {title: "Login"})
    },
    register: (req,res) =>{
        res.render('registro', {title: "registro"})
    },
    


    proceesLogin: (req,res) =>{
         let errors = validationResult(req)
         
    },



    processRegister: (req,res) =>{

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let lastId = 0;
        
            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });
    
           
    
            let { 
                name, 
                las_name,
                email,
                psw,
              } = req.body;
            
            let newUser = {
                id: lastId + 1,
                name,
                las_name,
              email,
              psw ,
               avatar: req.file ? req.file.fileName:  ["default-image.png"]
            };
    
            users.push(newUser);
    
            writeUsersJSON(usersDB);
    
            res.redirect('/users/login')

        } else {
            res.render('registro',  {
                title: "registro",
                categories, 
                errors : errors.mapped(),
                old : req.body,
                session: req.session 
            })
        }




},

}

