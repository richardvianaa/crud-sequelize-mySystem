const { Produto, Categoria } = require('../database/models')


const produtoController = {
    index: async(req, res) => {
        const produtos = await Produto.findAll({
            include: {
                model: Categoria,
                as: "categoria",
                required: true
            }
        });

        return res.render('produto', { produtos })
    }
}

module.exports = produtoController;