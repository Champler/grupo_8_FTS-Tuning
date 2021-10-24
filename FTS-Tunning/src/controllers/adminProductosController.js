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
    usuarios: (req, res) => {
        db.User.findAll()
        .then(users => { 
            res.render('listaUsuarios', {title: "Usuarios", users, session: req.session ? req.session : ""})
        })
    },

    productos: (req, res) => {
        db.Product.findAll({
            include: [{association: 'images'}]
        })
        .then(products=>{
            res.render('adminProducts', {products, title:"Productos", session: req.session ? req.session : ""})
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
                    .then(()=> res.redirect('/adminProductos/productos'))
                    .catch(err => console.log(err))                    
                }else {
                    db.Image.create({
                        name: "default-image.png",
                        product_id: product.id
                    })
                    .then(()=> res.redirect('/adminProductos/productos'))
                    .catch(err => console.log(err))
                }
            })
            .catch(error => {
                res.send(error)
            })
        } else {
            db.Category.findAll()
            .then(categories => {
            res.render('cargaProductos', {categories, title: "Carga de Productos", session: req.session ? req.session : "", errors : errors.mapped(),
            old : req.body,});
        })
        } 
    },
    editForm: (req, res) => {
        const product = db.Product.findOne({
            where : {
                id : req.params.id
            }
        })
        const category = db.Category.findAll()
        Promise.all([product, category])
        .then(([producto, categories]) =>{
            res.render('modificacionProductos', {
                producto, 
                categories,
                title: "Modificación del Producto :" + producto.name + " | FTS-Tuning",
                session: req.session ? req.session : ""
            })
        })
    },
    editProduct: (req, res) => {
        let errors = validationResult(req);
        let images;
        if (errors.isEmpty()) {
                    let { name, category, description,  carModel, brand, year, color, discount, price,stock } = req.body; 
                    db.Product.update(
                      {
                        name : name,
                        category_id : category,
                        description : description,
                        carModel : carModel,
                        brand : brand,
                        year : year,
                        color : color,
                        discount : discount,
                        price : price,
                        stock : stock 
                      },
                      {
                        where: {
                          id: +req.params.id,
                        },
                      }
                    )
                    .then(() => {
                      if (req.files.length > 0) {
                        db.Image.destroy({
                            where: {
                              product_id: +req.params.id,
                            },
                          }).then(()=> {
                              let images = [];
                              let nameImages = req.files.map((image) => image.filename);
                              nameImages.forEach((img) => {
                                let newImage = {
                                  product_id: +req.params.id,
                                  name: img
                                };
                                images.push(newImage);
                              });
                              db.Image
                                .bulkCreate(images)
                                .then(() => {
                                  res.redirect(`/adminProductos/productos`);
                                });
                          })
                      } else {
                        db.Image.findAll({
                            where: {
                              product_id: req.params.id,
                            },
                          })
                          .then((images) => {
                            if (images == 0) {
                              db.Image.create({
                                product_id: req.params.id,
                                name: "default-image.png",
                              });
                            }
                            res.redirect(`/adminProductos/productos`);
                          });
                      }
                    });
            }else {
          db.products
            .findByPk(req.params.id, {
              include: [
                { association: "category" },
                { association: "images" },
              ],
            })
            .then((product) => {
              res.render("productEdit", {
                errors: errors.mapped(),
                old: req.body,
                product,
              });
            });
        }
    },
    delete:function(req,res){
        db.Product.destroy({
            where : {
                id : +req.params.id
            }
        })
        res.redirect("/adminProductos/productos")
    },
    deleteUser:(req,res) =>{
        db.User.destroy({
            where : {
                id : +req.params.id
            }
        })
        res.redirect('/adminProductos/users')
    },
    editUser:(req,res) =>{
        db.User.update({
            rol: req.body.rol    
        },
        {           
            where :{
                id: +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/adminProductos/users')
        })
        .catch(error => {
            console.log(error)
        })
    },
    adminSearch: (req, res) => {
        let busqueda = req.query.searchAllProds.trim()
        db.Product.findAll({
            where: {
                name: {
                    [Op.substring]: busqueda
                }
            },
            include: [{association: "images"}]
        })
        .then(products => {
            res.render('adminProducts',{title:busqueda, products, session: req.session ? req.session : ""})
        })
    }
}