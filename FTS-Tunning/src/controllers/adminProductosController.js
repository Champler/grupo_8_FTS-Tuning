const { products, writeJson } = require('../data/productsDB')


module.exports = {
    cargaProducto: (req, res) => {
        res.render('cargaProductos', {title: "Carga de Productos"});
    },
    modificacionProducto: (req, res) => {
        res.render('modificacionProductos', {title: "Modificación de Productos"});
    },
    usuarios: (req, res) => {
        res.render('listaUsuarios', {title: "Usuarios"})
    },
    productos: (req, res) => {
        res.render('adminProducts', {products, title:"Productos"})
    },
    create: (req,res)=> { 
        let lastID = 1
        products.forEach(product =>{
            if(product.id > lastID){
                lastID = product.id
            }
        })
        let arrayImgs = []
        if(req.files){
            req.files.forEach(image => {
                arrayImgs.push(image.filename)
            })
        }
        let { name, category, description, carModel, brand, year, color, discount, price, frontback, leftright} = req.body
        let newProduct = {
            id: lastID + 1,
            name,
            category,
            description,
            img: arrayImgs.length > 0? arrayImgs: ["default-image.jpg"],
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