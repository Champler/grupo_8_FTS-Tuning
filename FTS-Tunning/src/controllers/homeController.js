
const {carrousel, products } = require('../data/productsDB')
const db = require('../database/models')

module.exports = {
    index: (req, res) => {
        res.render('Home', {title: "FTS - Tunning", carrousel, session: req.session ? req.session : ""})
    },
    busqueda: (req, res) => {
        let busqueda = req.query.busqueda.trim()
        let resultados = []
        products.filter(product => {
            if (product.name.includes(busqueda)){
                resultados.push(product)
            }
        })
        res.render('Productos', {title: busqueda,products: resultados, session: req.session ? req.session : ""})
    }
}
