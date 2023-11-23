const Lance = require('../models/lanceModel');

const lanceService = {
  getAllLances: async () => {
    return await Lance.findMany();
  },

  getLanceById: async (id) => {
    return await Lance.findUnique({ where: { id } });
  },

  createLance: async (valor, compradorId, leilaoId) => {
    return await Lance.create({ data: { valor, compradorId, leilaoId } });
  },

  updateLance: async (id, valor, compradorId, leilaoId) => {
    return await Lance.update({ where: { id }, data: { valor, compradorId, leilaoId } });
  },

  deleteLance: async (id) => {
    await Lance.delete({ where: { id } });
  },
};

module.exports = lanceService;