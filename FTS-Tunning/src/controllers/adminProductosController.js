const { products, writeJson } = require('../data/productsDB')
const { users, writeUsersJson } = require('../data/usersDB')

module.exports = {
    cargaProducto: (req, res) => {
        res.render('cargaProductos', {title: "Carga de Productos", session: req.session ? req.session : ""});
    },
    modificacionProducto: (req, res) => {
        res.render('modificacionProductos', {title: "Modificación de Productos", session: req.session ? req.session : ""});
    },
    usuarios: (req, res) => {
        res.render('listaUsuarios', {title: "Usuarios", users, session: req.session ? req.session : ""})
    },
    productos: (req, res) => {
        res.render('adminProducts', {products, title:"Productos", session: req.session ? req.session : ""})
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
    editForm: (req, res) => {
        let producto = products.find(product => {
            return product.id === +req.params.id
        })
        res.render('modificacionProductos', {
            producto, 
            title: producto.name + " | FTS-Tuning",
            session: req.session ? req.session : ""
        })
    },
    editProduct: (req, res) => {
        let { name, category, description, /* img, */ carModel, brand, year, color, discount, price, frontback, leftright } = req.body;
        let arrayImages = [];
        if(req.files){
            req.files.forEach(image => {
                arrayImages.push(image.filename)
            })
        }
        products.forEach(product => {
            if(product.id === +req.params.id){
                product.name = name,
                product.category = category,
                product.description = description,
                product.img = arrayImages.length > 0 ? arrayImages : ["default-image.jpg"],
                product.carModel = carModel,
                product.brand = brand,
                product.year = year,
                product.color = color,
                product.discount = discount,
                product.price = price,
                product.frontback = frontback,
                product.leftright = leftright
            }
        });
        writeJson(products)
        res.redirect('/adminProductos/productos')
    },
    delete: (req, res) => {
        products.forEach(product => {
            if(product.id === +req.params.id){
                let productoAEliminar = products.indexOf(product)
                products.splice(productoAEliminar, 1)
                /* products.splice(products.indexOf(product), 1) */
            }
        })
        writeJson(products)
        res.redirect('/adminProductos/productos')
    },
    deleteUser:(req,res) =>{
        users.forEach(user => {
            if(user.id === +req.params.id){
                let userAEliminar = users.indexOf(user)
                users.splice(userAEliminar, 1) 
            }
        })
        writeUsersJson(users)
        res.redirect('/adminProductos/users')
    },
    editUser:(req,res) =>{
        users.forEach(user => {
            if(user.id === +req.params.id){
                user.rol = req.body.rol
            }
        });
        writeUsersJson(users)
        res.redirect('/adminProductos/users')
    }
}