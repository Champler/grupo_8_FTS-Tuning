const { products } = require('../data/productsDB');
const db = require('../database/models');


module.exports = {
    producto: (req, res) => {
        res.render('Productos', {products, title:"Productos", session: req.session ? req.session : ""});
    },
    detalle: (req, res) => {                             //  Fabio
        let paramsIdProducto = req.params.idProducto.trim();
        let producto = products.find(element => element.id === +paramsIdProducto)
        if (producto !== undefined){
            /* let sliderProducts = products.filter(item => item.category === producto.category) */
            let sliderProducts = products;    //  <----   Sololamente hay 2 productos por categoría, así que el slider muestra los 12 productos que hay hasta el momento
            let texto = producto.description.split('\r\n') 
            res.render('ProductoDetalle', {
                sliderTitle : "También te pueden interesar",
                sliderProducts,
                producto,
                texto,
                title: producto.name + " | FTS-Tuning",
                session: req.session ? req.session : ""
            })
        }else{
            res.send('No tenemos ese producto, pero tenemos muchos otros más...')
        }
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
                res.render('Productos', {products: filtradosPorCategoria,n,category,title:"Categoría", session: req.session ? req.session : ""})
            }else {
                res.render('Productos', {products, title:"Categoria",category,session: req.session ? req.session : ""})
            }   
        })
    }
    
}