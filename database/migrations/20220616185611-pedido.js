'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pedido', {
            id_pedido: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            status: Sequelize.STRING,
            fk_usuario: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Usuario",
                    key: "id"
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pedido')
    }
};