let express = require("express");
let router = express.Router();
let controller = require("../controllers/contactanosController")

router.get("/Contactanos" ,controller.contacto)


module.exports = router;