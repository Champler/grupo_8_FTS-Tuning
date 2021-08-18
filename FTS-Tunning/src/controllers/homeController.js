const {carrousel } = require('../data/productsDB')

module.exports = {
    index: (req, res) => {
        res.render('Home', {title: "FTS - Tunning", carrousel})
    }
}

