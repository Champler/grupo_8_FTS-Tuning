let db = require('../data/productsDataBase')

module.exports = {
    contact: (req, res) => {
        res.render('contactanos')
    },
    us: (req, res) => {
        res.render('quienesSomos')
    },
}

