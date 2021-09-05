
let { users, writeUsersJson} = require('../data/usersDB.js')

module.exports = (req, res, next) => {
    next();
    /* console.log("+++++++++++++++++++++++  " + req.cookies.cookieFTS.email + "  +++++"); */
    /* console.log("***********************  " + req.session.user.email + "  *****"); */
    /* console.log(users); */

    if(req.cookies.cookieFTS != undefined && req.session.user == undefined) {
        console.log(">>>>>" + req.cookies.cookieFTS.email + "<<<<<");
        /* res.sendFile(req.cookies.cookieFTS) */
        let elEmail = req.cookies.cookieFTS.email;
        console.log(">>>>>" + elEmail + "<<<<<");
        let userCookie = users.find(user => user.email === elEmail);
        console.log("XXXXX  XXXXX   XXXXXX   XXX    " + userCookie.id + "    XXXXX  XXXXXXXX   XXX XXXX XXXXXXXXXXXXXXXXXXXXXXXXXXX")
        req.session.user = {
            id: userCookie.id,
            userName: userCookie.firstName + " " + userCookie.lastName,
            email: userCookie.email,
            avatar: userCookie.image,
            rol: userCookie.rol
        }
        console.log(req.session.user.id)
        console.log(req.session.user.userName)
        console.log(req.session.user.email)
        console.log(req.session.user.rol)
    }
}