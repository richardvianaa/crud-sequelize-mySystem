const fileController = {
    formFIle: (req, res) => {
        res.render('form-file')
    },
    envFile: (req, res) => {
        console.log(req.files);

        res.send("Arquivo Enviado")
    }
};

module.exports = fileController;