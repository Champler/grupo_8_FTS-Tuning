const { products } = require('../data/productsDB')


module.exports = {
    producto: (req, res) => {
        res.render('Productos', {products});
    },
    detalle: (req, res) => {                             //  Fabio
        let paramsIdProducto = req.params.idProducto.trim();
        let producto = products.find(element => element.id === +paramsIdProducto)
        
        if (producto !== undefined){
            /* let sliderProducts = products.filter(item => item.category === producto.category) */
            let sliderProducts = products;    //  <----   Sololamente hay 2 productos por categoría, así que el slider muestra los 12 productos que hay hasta el momento
            res.render('ProductoDetalle', {
                sliderTitle : "También te pueden interesar",
                sliderProducts,
                producto
            })
        }else{
            res.send('No tenemos ese producto, pero tenemos muchos otros más...')
        }
    },
    carrito: (req, res) =>{
        res.render('Carrito')
    },
    categoria: (req,res) =>{
        let categoria = req.params.categoria.trim()
        let filtradosPorCategoria = []
        products.forEach(producto =>{
            if(producto.category.replace(/ /g, "").toLowerCase() === categoria.toLowerCase()){
                filtradosPorCategoria.push(producto)
            }
        })
        if(filtradosPorCategoria.length > 0){
            res.render('Productos', {products: filtradosPorCategoria})
        }else {
            res.render('Productos', {products})
        }
        
    }
}