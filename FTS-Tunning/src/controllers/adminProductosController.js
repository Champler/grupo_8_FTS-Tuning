const { products } = require('../data/productsDB')


module.exports = {
    index: (req, res) => {
        res.render('cargaProductos');
    },
    cargaProducto: (req, res) => {
        res.render('cargaProductos');
    },
    modificacionProducto: (req, res) => {
        res.render('modificacionProductos');
    }
}