const { products, writeJson } = require('../data/productsDB')
const { users, writeUsersJson } = require('../data/usersDB')
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require("sequelize");


module.exports = {
    cargaProducto: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            res.render('cargaProductos', {categories, title: "Carga de Productos", session: req.session ? req.session : ""});
        })    
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
            let arrayImages = []
            if(req.files){
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }
            let { name, description, carModel, brand, year, color, discount, price, stock, category} = req.body
            console.log(req.body);
            db.Product.create( {
                name,
                category_id: category,
                description,
                carModel,
                brand, 
                year,
                color,
                discount,
                price,
                stock
            })
            .then(product => {
                if(arrayImages.length > 0){
                    let images = arrayImages.map(image => {
                        return {
                            name: image,
                            product_id: product.id
                        }
                    })
                    db.Image.bulkCreate(images)
                    .then(()=> res.redirect('/admin/products'))
                    .catch(err => console.log(err))                    
                }else {
                    db.ProductImages.create({
                        image: "default-image.png",
                        productId: product.id
                    })
                    .then(()=> res.redirect('/admin/products'))
                    .catch(err => console.log(err))
                }
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