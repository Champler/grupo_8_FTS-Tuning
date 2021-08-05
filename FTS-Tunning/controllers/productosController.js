const { products } = require('../data/productsDB')


module.exports = {
    index: (req, res) => {
        res.render('Productos');
    },
    producto: (req, res) => {
        res.render('Productos');
    },
    detalle: (req, res) => {                             //  Fabio
        /* res.send(products); */
        /* let paramsIdProducto = req.params.idProducto.trim(); */
        /* res.send(typeof +paramsIdProducto === 'number'); */
        /* let producto = products.find(element => element.id === paramsIdProducto)
        res.send(producto) */
        /* res.render('ProductoDetalle', {products}); */
        let paramsIdProducto = req.params.idProducto.trim();
        let producto = products.find(element => element.id === paramsIdProducto)
        /* let sliderProducts = products.filter(item => item.category === producto.category) */
        /* res.send(sliderProducts) */
        if (producto !== undefined){
            let sliderProducts = products.filter(item => item.category === producto.category)
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