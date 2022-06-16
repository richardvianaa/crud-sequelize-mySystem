var express = require('express');
var router = express.Router();


const categoriaController = require('../controllers/categoriaController');

router.get("/", categoriaController.index);
router.get("/:id/produtos", categoriaController.showProducts);

module.exports = router;