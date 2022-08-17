var express = require('express');
var router = express.Router();

const pedidosController = require('../controllers/pedidoController');


router.get('/', pedidosController.index);
router.get('/:id/produtos', pedidosController.showProducts);

router.post('/newPedido', pedidosController.create);


router.delete('/deletePedido/:id', pedidosController.destroy);



module.exports = router;