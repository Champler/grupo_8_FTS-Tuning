let db = require('../data/productsDataBase')

module.exports = {
    contact: (req, res) => {
        res.render('contactanos', {title: "Contactanos", session: req.session ? req.session : ""})
    },
    us: (req, res) => {
        res.render('quienesSomos', {title: "Nosotros", session: req.session ? req.session : ""})
    },
}

