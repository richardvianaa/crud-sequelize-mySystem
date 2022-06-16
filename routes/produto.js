var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');


router.get('/', produtoController.index);

module.exports = router;