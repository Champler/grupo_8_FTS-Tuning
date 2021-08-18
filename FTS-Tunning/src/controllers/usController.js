let db = require('../data/productsDataBase')

module.exports = {
    contact: (req, res) => {
        res.render('contactanos', {title: "Contactanos"})
    },
    us: (req, res) => {
        res.render('quienesSomos', {title: "Nosotros"})
    },
}

