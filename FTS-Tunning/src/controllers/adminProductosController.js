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
    create: (req,res)=> { 
        let lastID = 1
        products.forEach(product =>{
            if(product.id > lastID){
                lastID = product.id
            }
        })
        let { name, category, description, carModel, brand, year, color, discount, price, frontback, leftright} = req.body
        let newProduct = {
            id: lastID + 1,
            name,
            category,
            description,
            img:[ "default-image.jpg"],
            carModel,
            brand, 
            year,
            color,
            discount,
            price,
            frontback,
            leftright
        }

        products.push(newProduct)
        writeJson(products)
        res.redirect('/adminProductos/productos')
    },
    editForm: {

    },
    editProduct: {

    },
    delete: {

    },
}