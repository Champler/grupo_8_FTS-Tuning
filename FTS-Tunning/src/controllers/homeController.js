let db = require('../data/productsDataBase')

module.exports = {
    index: (req, res) => {
        res.render('Home')
    }
}

