//const { products } = require('../data/productsDB');
const db = require('../database/models');


module.exports = {
    producto: (req, res) => {
        db.Product.findAll({
            include: [{association: "category"}, {association: "images"}]
        })
        .then((products) => {
            res.render('Productos', {products, n:false,title:"Productos", session: req.session ? req.session : ""});
        })
        .catch(err => console.log(err))
    },
    detalle: (req, res) => {                             //  Fabio
        const product = db.Product.findByPk(req.params.idProducto, {
            include: [{association: "category"}, {association: "images"}]
        })
        const slider = db.Product.findAll({
            include: [{association: "category"}, {association: "images"}]
        })
        Promise.all([product,slider])
        .then(([product, slider]) => {
            if (product !== null){ 
                let sliderProducts = slider;    //  <----   Sololamente hay 2 productos por categoría, así que el slider muestra los 12 productos que hay hasta el momento
                let texto = product.description.split('\r\n')
                res.render('ProductoDetalle', {
                    sliderTitle : "También te pueden interesar",
                    sliderProducts,
                    product,
                    texto,
                    n: false,
                    title: product.name + " | FTS-Tuning",
                    session: req.session ? req.session : ""
                }) 
            }else{
                res.send('No tenemos ese producto, pero tenemos muchos otros más...')
            }
        })
        .catch(error => console.log(error))
    },
    carrito: (req, res) =>{
        res.render('Carrito', {title: "Carrito", session: req.session ? req.session : ""})
    },
    categoria: (req,res) =>{
        const category = db.Category.findOne({
            where: {
                name: req.params.categoria.trim()
            }
        })
        const products = db.Product.findAll({
            include: [{association: "category"}, {association: "images"}]
        })
        Promise.all([category, products])
        .then(([category, products] )=> {
            
            let filtradosPorCategoria = []
            products.forEach(producto =>{
                if(producto.category_id === category.id){
                    filtradosPorCategoria.push(producto)
                }
            })
            
            
            if(filtradosPorCategoria.length > 0){
                res.render('Productos', {products: filtradosPorCategoria,n: true,category,title:"Categoría", session: req.session ? req.session : ""})
            }else {  
                res.render('Productos', {products, title:"Categoria",n: false,category,session: req.session ? req.session : ""})
            }   
        })
    }
}