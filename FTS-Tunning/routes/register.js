let express = require("express");
let router = express.Router();
let controller = require("../controllers/registerController")

router.get("/register" ,controller.register)


module.exports = router; 