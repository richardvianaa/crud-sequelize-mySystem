module.exports = (Sequelize, DataType) => {
    const Usuario = Sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        nome: DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: DataType.STRING
    }, {
        tableName: 'usuario',
        timestamps: false
    });

    return Usuario;
};