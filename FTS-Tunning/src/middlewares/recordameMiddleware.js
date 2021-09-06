
let { users, writeUsersJson} = require('../data/usersDB.js')

module.exports = (req, res, next) => {
    
    
    if(req.cookies.cookieFTS != undefined && req.session.user == undefined) {
        
        console.log("-----------------     CONTENIDO DE req.cookies.cookieFTS:     id: " + req.cookies.cookieFTS.id + ",     userName: " + req.cookies.cookieFTS.userName + ",     email " + req.cookies.cookieFTS.email + ",      rol:  " + req.cookies.cookieFTS.rol + "      --------")
        
        let userCookie = users.find(user => user.email === req.cookies.cookieFTS.email);
        
        req.session.user = {
            id: userCookie.id,
            userName: userCookie.firstName + " " + userCookie.lastName,
            email: userCookie.email,
            avatar: userCookie.image,
            rol: userCookie.rol
        }
        console.log("-----------------     CONTENIDO DE req.sesion.user:           id: " + req.session.user.id + ",     userName: " + req.session.user.userName + ",     email " + req.session.user.email + ",      rol:  " + req.session.user.rol + "      --------")
    }
    next();
}