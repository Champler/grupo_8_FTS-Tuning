const { products } = require('../data/productsDB')


module.exports = {
    index: (req, res) => {
        /* res.send('hola'); */
        res.render('Productos');
    },
    producto: (req, res) => {
        res.render('Productos');
    },
    productoDetalle: (req, res) => {
        res.render('ProductoDetalle');
    }
}