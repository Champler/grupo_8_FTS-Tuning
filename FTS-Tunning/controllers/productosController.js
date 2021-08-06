const { products } = require('../data/productsDB')


module.exports = {
    producto: (req, res) => {
        res.render('Productos');
    },
    detalle: (req, res) => {                             //  Fabio
        let paramsIdProducto = req.params.idProducto.trim();
        let producto = products.find(element => element.id === paramsIdProducto)
        
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
    carrito: (req, res) =>{
        res.render('Carrito')
    }
}