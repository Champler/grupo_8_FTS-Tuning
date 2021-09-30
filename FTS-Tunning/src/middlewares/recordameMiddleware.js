/* let { users } = require('../data/usersDB.js')

module.exports = (req, res, next) => {
    
    
    if(req.cookies.cookieFTS != undefined && req.session.user == undefined) {
                     
        let userCookie = users.find(user => user.email === req.cookies.cookieFTS.email);
        
        req.session.user = {
            id: userCookie.id,
            userName: userCookie.firstName + " " + userCookie.lastName,
            avatar: userCookie.image,
            rol: userCookie.rol
        }
    }
    next();
} */