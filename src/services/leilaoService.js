const Leilao = require('../models/leilaoModel');

const leilaoService = {
  getAllLeiloes: async () => {
    return await Leilao.findMany();
  },

  getLeilaoById: async (id) => {
    return await Leilao.findUnique({ where: { id } });
  },

  createLeilao: async (produto, preco, dataLimite, donoId) => {
    return await Leilao.create({ data: { produto, preco, dataLimite, donoId } });
  },

  updateLeilao: async (id, produto, preco, dataLimite, donoId) => {
    return await Leilao.update({ where: { id }, data: { produto, preco, dataLimite, donoId } });
  },

  deleteLeilao: async (id) => {
    await Leilao.delete({ where: { id } });
  },
};

module.exports = leilaoService;