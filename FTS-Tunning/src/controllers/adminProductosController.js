const { products, writeJson } = require('../data/productsDB')
const { users, writeUsersJson } = require('../data/usersDB')
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");


module.exports = {
    cargaProducto: (req, res) => {
        res.render('cargaProductos', {title: "Carga de Productos", session: req.session ? req.session : ""});
    },
    modificacionProducto: (req, res) => {
        res.render('modificacionProductos', {title: "Modificación de Productos", session: req.session ? req.session : ""});
    },
    usuarios: (req, res) => {
        res.render('listaUsuarios', {title: "Usuarios", users, session: req.session ? req.session : ""})
    },
    productos: (req, res) => {


        db.Product.findAll()
        .then(resultAll=>{
            res.render('adminProducts', {resultAll, title:"Productos", session: req.session ? req.session : ""})
        })
        .catch(error => {
            console.log(error)
        })

       
    },
    create: (req,res)=> { 
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let arrayImgs = []
            if(req.files){
                req.files.forEach(image => {
                    arrayImgs.push(image.filename)
                })
            }
            let { name, description, carModel, brand, year, color, discount, price, frontback, leftright,stock} = req.body
            console.log(req.body);
            db.Product.create( {
                id:db.Product.id,
                name,
                category_id:2,
                description,
                img: arrayImgs.length > 0? arrayImgs: ["default-image.jpg"],
                carModel,
                brand, 
                year,
                color,
                discount,
                price,
                frontback,
                leftright,
                stock
            })
            .then(result => {
                //console.log(req.files) //------------> descomentar para ver el producto a pushear
                res.redirect('/adminProductos/productos')
            })
            .catch(error => {
                res.send(error)
            })
          

        } else {
            res.render('cargaProductos', {
                title: "Carga de Productos",
                errors : errors.mapped(),
                old : req.body,
                session: req.session ? req.session : ""
            })
        } 
    },
    editForm: (req, res) => {
        let aProducto = req.params.id;
            db.Product.findOne({
                where : {
                    id : aProducto
                }
            })
       .then(producto =>{
        res.render('modificacionProductos', {
            producto, 
            title: "Modificación del Producto :" + producto.name + " | FTS-Tuning",
            session: req.session ? req.session : ""
        })
       })
    },
    editProduct: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { name, category, description, /* img, */ carModel, brand, year, color, discount, price, frontback, leftright,stock } = req.body;
            let idProducto = req.params.id;
            db.Product.update({
                    name : name,
                    category_id : 2,
                    description : description,
                    img : "aqui debe ir una immg",
                    carModel : carModel,
                    brand : brand,
                    year : year,
                    color : color,
                    discount : discount,
                    price : price,
                    frontback : frontback,
                    leftright : leftright,
                    stock : stock
                
            },{
            
                where :{
                    id: idProducto
                }
            })
            .then(result =>{
                res.redirect('/adminProductos/productos')
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    },
    delete:function(req,res){
        let idProducto = req.params.id;
        db.Product.destroy({
            where : {
                id : idProducto
            }
        })
        res.redirect("/")
    },
    deleteUser:(req,res) =>{
        users.forEach(user => {
            if(user.id === +req.params.id){
                let userAEliminar = users.indexOf(user)
                users.splice(userAEliminar, 1) 
            }
        })
        writeUsersJson(users)
        res.redirect('/adminProductos/users')
    },
    editUser:(req,res) =>{
        users.forEach(user => {
            if(user.id === +req.params.id){
                user.rol = req.body.rol
            }
        });
        writeUsersJson(users)
        res.redirect('/adminProductos/users')
    }
}