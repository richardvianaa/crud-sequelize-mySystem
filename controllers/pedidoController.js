const pedidoService = require('../service/pedidoService');
const { Produto, Pedido, Itempedido } = require('../database/models');


const pedidoController = {
    index: async(req, res) => {
        const pedidos = await pedidoService.allPedidos();

        return res.render('pedido', { pedidos })
    },
    showProducts: async(req, res) => {
        const { id } = req.params;
        const pedido = await Pedido.findOne({
            where: {
                id_pedido: id
            },
            include: {
                model: Produto,
                as: "itenPedidos",
                required: true
            }
        })
        return res.render('pedidosDetalhes', { pedido })
    },
    create: async(req, res) => {
        const { status } = req.body;

        const pedido = await pedidoService.createPedido(
            status
        );

        return res.json(pedido);
    },
    destroy: async(req, res) => {
        const { id } = req.params;

        await Pedido.destroy({
            where: {
                id_pedido: id
            }
        });

        return res.redirect("/pedidos")
    }
}

module.exports = pedidoController;