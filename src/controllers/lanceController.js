const lanceService = require('../services/lanceService');

const lanceController = {
  getAllLances: async (req, res) => {
    try {
      const lances = await lanceService.getAllLances();
      res.json(lances);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lances' });
    }
  },

  getLanceById: async (req, res) => {
    const { id } = req.params;
    try {
      const lance = await lanceService.getLanceById(Number(id));
      res.json(lance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lance por ID' });
    }
  },

  createLance: async (req, res) => {
    const { valor, compradorId, leilaoId } = req.body;
    try {
      const novoLance = await lanceService.createLance(valor, compradorId, leilaoId);
      res.json(novoLance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  },

  updateLance: async (req, res) => {
    const { id } = req.params;
    const { valor, compradorId, leilaoId } = req.body;
    try {
      const lanceAtualizado = await lanceService.updateLance(Number(id), valor, compradorId, leilaoId);
      res.json(lanceAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar lance' });
    }
  },

  deleteLance: async (req, res) => {
    const { id } = req.params;
    try {
      await lanceService.deleteLance(Number(id));
      res.json({ message: 'Lance excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir lance' });
    }
  },
};

module.exports = lanceController;