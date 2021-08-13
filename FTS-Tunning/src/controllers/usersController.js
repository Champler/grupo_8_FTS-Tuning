let db = require('../data/productsDataBase')

module.exports = {
    historial: (req, res) => {
        res.render('historialCompras')
    },
    login: (req, res) => {
        res.render('Login')
    },
    register: (req,res) =>{
        res.render('registro')
    }
}

