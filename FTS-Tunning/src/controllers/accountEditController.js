let db = require('../data/productsDataBase')

module.exports = {
    accountEdit: (req, res) => {
        res.render('accountEdit', {title: "Edita tu cuenta"})
    }
}

