let db = require('../data/productsDataBase')

module.exports = {
    productos: (req, res) => {
        res.render('Productos', {
            db
        })
    }
}

