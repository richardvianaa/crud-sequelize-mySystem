var express = require('express');
var router = express.Router();

const testeController =  require("../controllers/testeController");

router.get("/", testeController.index);


module.exports = router;