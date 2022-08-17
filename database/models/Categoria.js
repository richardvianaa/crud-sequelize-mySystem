module.exports = (Sequelize, DataType) => {
    const Categoria = Sequelize.define('Categoria', {
        id_categoria: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
    }, {
        tableName: 'categoria',
        timestamps: false
    });

    Categoria.associate = (listModels) => {
        Categoria.hasMany(listModels.Produto, {
            foreignKey: "fk_categoria",
            as: "produtos"
        });
    }

    return Categoria;
};