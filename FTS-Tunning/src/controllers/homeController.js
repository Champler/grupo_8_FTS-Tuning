
const {carrousel, products } = require('../data/productsDB')
const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        res.render('Home', {title: "FTS - Tunning", carrousel, session: req.session ? req.session : ""})
    },
    busqueda: (req, res) => {
        let busqueda = req.query.busqueda.trim()
        db.Product.findAll({
            where: {
                name: busqueda
            },
            include: [{association: "images"}]
        })
        .then(products => {
            res.render('Productos',{title: busqueda,n:false,products, session: req.session ? req.session : ""})
        })
    }
}
