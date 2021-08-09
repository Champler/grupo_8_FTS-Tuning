const { products } = require('../data/productsDB')


module.exports = {
    index: (req, res) => {
        res.render('Productos');
    },
    producto: (req, res) => {
        res.render('Productos');
    },
    detalle: (req, res) => {                             //  Fabio
        let paramsIdProducto = req.params.idProducto.trim();
        let producto = products.find(element => element.id === paramsIdProducto)
        
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
}