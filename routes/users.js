var express = require('express');
var router = express.Router();
const multer = require('multer');

const fileController = require('../controllers/fileController');
const usuarioController = require('../controllers/usuarioController');


const multerConfig = require("../config/multer");
const uploadFile = multer({ storage: multerConfig });

/* GET users listing. */
router.get("/", usuarioController.index);
router.get("/buscarUser/:id", usuarioController.findByID);
router.get("/search", usuarioController.search);

router.get("/cadastro", usuarioController.create);
router.post("/cadastro", usuarioController.store);

router.get("/editar/:id", usuarioController.edit);
router.put("/editar/:id", usuarioController.update);

/*router.get("/criacao", usuarioController.bulkCreate);*/

router.delete("/deletar/:id", usuarioController.destroy);

router.get("/register", fileController.formFIle);
//router.post("/register", uploadFile.single('img'), fileController.envFile); //envia um unico arquivo(imagem)
router.post("/register", uploadFile.array("img"), fileController.envFile); //envia varias imagens;


module.exports = router;