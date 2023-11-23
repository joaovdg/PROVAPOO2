const leilaoService = require('../services/leilaoService');

const leilaoController = {
  getAllLeiloes: async (req, res) => {
    try {
      const leiloes = await leilaoService.getAllLeiloes();
      res.json(leiloes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter leilões' });
    }
  },

  getLeilaoById: async (req, res) => {
    const { id } = req.params;
    try {
      const leilao = await leilaoService.getLeilaoById(Number(id));
      res.json(leilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter leilão por ID' });
    }
  },

  createLeilao: async (req, res) => {
    const { produto, preco, dataLimite, donoId } = req.body;
    try {
      const novoLeilao = await leilaoService.createLeilao(produto, preco, dataLimite, donoId);
      res.json(novoLeilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar leilão' });
    }
  },

  updateLeilao: async (req, res) => {
    const { id } = req.params;
    const { produto, preco, dataLimite, donoId } = req.body;
    try {
      const leilaoAtualizado = await leilaoService.updateLeilao(Number(id), produto, preco, dataLimite, donoId);
      res.json(leilaoAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar leilão' });
    }
  },

  deleteLeilao: async (req, res) => {
    const { id } = req.params;
    try {
      await leilaoService.deleteLeilao(Number(id));
      res.json({ message: 'Leilão excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir leilão' });
    }
  },
};

module.exports = leilaoController;