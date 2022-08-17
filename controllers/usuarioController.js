const { Usuario } = require('../database/models');
const sequelize = require('sequelize');
const op = sequelize.Op;


const usuarioController = {
    index: async(req, res) => {
        let usersAll = await Usuario.findAll({
            limit: 4, //limit de usuarios que quero que apareça;
            offset: 0 // pula o id passado e começa a partir do proximo;
        });
        return res.render('usuario', { usersAll });
    },
    create: (req, res) => {
        return res.render("cadastroUsuario")
    },
    store: async(req, res) => {
        let { nome, email, senha } = req.body;

        await Usuario.create({
            nome,
            email,
            senha
        });

        return res.redirect("/users");
    },
    destroy: async(req, res) => {
        const { id } = req.params;
        let deleteUser = await Usuario.destroy({
            where: {
                id: id
            }
        })
        console.log(deleteUser);
        return res.redirect("/users");
    },
    edit: async(req, res) => {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);

        return res.render("editUser", { usuario });
    },
    update: async(req, res) => {
        const { id } = req.params;
        let { nome, email, senha } = req.body;

        const novoPerfil = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: {
                id: id
            }
        })
        console.log(novoPerfil);
        return res.redirect('/users')
    },
    /*  bulkCreate: async(req, res) => {
         let createBulkUsers = [
             { nome: "rick bulck", email: "bulk@gmail.com", senha: "125fa4677" },
             { nome: "rita bulck", email: "rita@gmail.com", senha: "1asfasf254677" },
             { nome: "clear bulck", email: "clear@gmail.com", senha: "125asfasfd4677" }
         ]

         let resultado = await Usuario.bulkCreate(createBulkUsers);

         res.send("Usuários adicionados")
     },*/
    findByID: async(req, res) => {
        let { id } = req.params;

        let user = await Usuario.findAll({
            where: {
                id: id
            }
        });
        return res.render('usuarioOne', { user })
    },
    search: async(req, res) => {
        let { key } = req.query;

        let usersAll = await Usuario.findAll({
            where: {
                nome: {
                    [op.like]: `%${key}%`
                }
            },
            order: [
                ['id', 'ASC']
            ]
        });
        console.log(usersAll)
        return res.render('usuario', { usersAll });
    }
};

module.exports = usuarioController;