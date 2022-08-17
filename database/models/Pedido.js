module.exports = (Sequelize, DataType) => {
    const Pedido = Sequelize.define('Pedido', {
        id_pedido: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: DataType.STRING,
        fk_usuario: {
            type: DataType.INTEGER,
            references: {
                model: "Usuario",
                key: "id"
            }
        }
    }, {
        tableName: 'pedido',
        timestamps: true
    });

    Pedido.associate = (listModels) => {
        Pedido.belongsToMany(listModels.Produto, {
            foreignKey: "fk_produto",
            as: "itenPedidos",
            through: "listModels.Itempedido"
        })
    };


    return Pedido;
};