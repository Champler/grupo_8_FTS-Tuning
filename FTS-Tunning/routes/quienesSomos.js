let express = require("express");
let router = express.Router();
let controller = require("../controllers/quienesSomosController")

router.get("/quienesSomos" ,controller.info)



module.exports = router;