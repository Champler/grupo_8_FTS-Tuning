let db = require('../data/productsDataBase')

module.exports = {
    DatosDePago: (req, res) => {
        res.render('DatosDePago', {title: "Datos de pago"})
    }
}

