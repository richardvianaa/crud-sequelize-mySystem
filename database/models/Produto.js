module.exports = (Sequelize, DataType) => {
    const Produto = Sequelize.define('Produto', {
        id_produto: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        nome: DataType.STRING,
        descricao: DataType.STRING,
        preco: DataType.DECIMAL,
        fk_categoria: {
            type: DataType.INTEGER
        }
    }, {
        tableName: 'produto',
        timestamps: false
    });

    Produto.associate = (listModels) => {
        Produto.belongsTo(listModels.Categoria, {
            foreignKey: 'fk_categoria',
            as: 'categoria'
        })
    }

    return Produto;
};