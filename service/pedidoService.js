const database = require('../database/models');

const pedidoService = {
    allPedidos: async() => {
        const allPedidos = await database.Pedido.findAll();

        return allPedidos;
    },
    createPedido: async(status) => {
        const newPedido = await database.Pedido.create({
            status
        });

        return newPedido;
    }
}

module.exports = pedidoService;