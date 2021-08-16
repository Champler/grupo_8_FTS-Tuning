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
    },
    usuarios: (req, res) => {
        res.render('listaUsuarios')
    },
    productos: (req, res) => {
        res.render('adminProducts', {products})
    },
    create: {

    },
    editForm: (req, res) {

    },
    editProduct: (req, res) {

    },
    delete: (req, res) {

    },
}