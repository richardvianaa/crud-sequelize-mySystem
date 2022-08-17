'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('item_pedido', {
            id_item_pedido: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fk_pedido: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Pedido",
                    key: "id_pedido"
                }
            },
            fk_produto: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Produto",
                    key: "id_produto"
                }
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('item_pedido');
    }
};