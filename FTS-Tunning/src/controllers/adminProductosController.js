const { products, writeJson } = require('../data/productsDB')


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
    editForm: (req, res) => {
        let producto = products.find(product => {
            return product.id === req.params.id
        })
        res.render('modificacionProductos', {producto})
    },
    editProduct: (req, res) => {
        let { name, category, description, /* img, */ carModel, marca, year, color, discount, price, frontBack, leftRight } = req.body;
        products.forEach(product => {
            if(product.id === req.params.id){
                product.name = name,
                product.category = category,
                product.description = description,
                /* product.img[0] = img, */
                product.carModel = carModel,
                product.marca = marca,
                product.year = year,
                product.color = color,
                product.discount = discount,
                product.price = price,
                product.frontBack = frontBack,
                product.leftRight = leftRight
            }
        });
        writeJson(products)
        res.redirect('/adminProductos/productos')
    },
    delete: (req, res) => {
        res.send(req.params.id)
    },
}