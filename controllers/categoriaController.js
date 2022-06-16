const { Produto, Categoria } = require('../database/models')

const categoriaController = {
    index: async(req, res) => {
        const categoria = await Categoria.findAll();

        return res.render('categorias', { categoria })
    },
    showProducts: async(req, res) => {
        const { id } = req.params;

        const categoria = await Categoria.findOne({
            where: {
                id_categoria: id
            },
            include: {
                model: Produto,
                as: "produtos",
                required: true
            }
        })
        return res.render('productCategoria', { categoria })
    }
}

module.exports = categoriaController;