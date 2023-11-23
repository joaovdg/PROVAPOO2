const usuarioService = require('../services/usuarioService');

const usuarioController = {
  getAllUsuarios: async (req, res) => {
    try {
      const usuarios = await usuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter usuários' });
    }
  },

  getUsuarioById: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await usuarioService.getUsuarioById(Number(id));
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter usuário por ID' });
    }
  },

  createUsuario: async (req, res) => {
    const { nome, email } = req.body;
    try {
      const novoUsuario = await usuarioService.createUsuario(nome, email);
      res.json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },

  updateUsuario: async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
      const usuarioAtualizado = await usuarioService.updateUsuario(Number(id), nome, email);
      res.json(usuarioAtualizado);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  },

  deleteUsuario: async (req, res) => {
    const { id } = req.params;
    try {
      await usuarioService.deleteUsuario(Number(id));
      res.json({ message: 'Usuário excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
  },
};

module.exports = usuarioController;