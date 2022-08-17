module.exports = (Sequelize, DataType) => {
    const ItemPedido = Sequelize.define('Item_Pedido', {
        id_item_pedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_pedido: {
            type: DataType.INTEGER,
            references: {
                model: "Pedido",
                key: "id_pedido"
            }
        },
        fk_produto: {
            type: DataType.INTEGER,
            references: {
                model: "Produto",
                key: "id_produto"
            }
        },
    }, {
        tableName: 'item_pedido',
        timestamps: false
    });

    return ItemPedido;
};