const Usuario = require('../models/usuarioModel');

const usuarioService = {
  getAllUsuarios: async () => {
    return await Usuario.findMany();
  },

  getUsuarioById: async (id) => {
    return await Usuario.findUnique({ where: { id } });
  },

  createUsuario: async (nome, email) => {
    return await Usuario.create({ data: { nome, email } });
  },

  updateUsuario: async (id, nome, email) => {
    return await Usuario.update({ where: { id }, data: { nome, email } });
  },

  deleteUsuario: async (id) => {
    await Usuario.delete({ where: { id } });
  },
};

module.exports = usuarioService;