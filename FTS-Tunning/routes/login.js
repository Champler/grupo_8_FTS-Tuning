let express = require("express");
let router = express.Router();
let controller = require("../controllers/loginController")

router.get("/login" ,controller.login)


module.exports = router;