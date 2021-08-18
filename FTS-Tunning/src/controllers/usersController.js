let db = require('../data/productsDataBase')

module.exports = {
    historial: (req, res) => {
        res.render('historialCompras', {title: "Historial"})
    },
    login: (req, res) => {
        res.render('Login', {title: "Login"})
    },
    register: (req,res) =>{
        res.render('registro', {title: "Registro"})
    }
}

