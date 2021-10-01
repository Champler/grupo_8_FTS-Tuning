//const { products } = require('../data/productsDB');
const db = require('../database/models');


module.exports = {
    producto: (req, res) => {
        db.Product.findAll()
        .then((products) => {
            res.render('Productos', {products, title:"Productos", session: req.session ? req.session : ""});
        })
        .catch(err => console.log(err))
    },
    detalle: (req, res) => {                             //  Fabio
        const producto = db.Product.findByPk(req.params.idProducto, {
            include: [{association: "category"}, {association: "images"}]
        })
        /* const slider = db.Product.findAll({
            include: [{association: "category"}, {association: "images"}]
        })
        Promise.all([producto,slider])
        .then((producto, slider) => { */
        .then((producto) => { 
        
            if (producto !== undefined){ 
                //let sliderProducts = slider;    //  <----   Sololamente hay 2 productos por categoría, así que el slider muestra los 12 productos que hay hasta el momento
                let texto = producto.description.split('\r\n')
                console.log(">>>  " + texto + "   <<<")
                res.render('ProductoDetalle', {
                    sliderTitle : "También te pueden interesar",
                    //sliderProducts,
                    producto,
                    texto,
                    n: false,
                    pk: req.params.idProducto,
                    title: producto.name + " | FTS-Tuning",
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
            
            let n;
            if(filtradosPorCategoria.length > 0){
                n: true;
                res.render('Productos', {products: filtradosPorCategoria,n,category,title:"Categoría", session: req.session ? req.session : ""})
            }else {
                n: false;
                res.render('Productos', {products, title:"Categoria",n,category,session: req.session ? req.session : ""})
            }   
        })
    }
    
}