const express = require('express');
const leilaoController = require('../controllers/leilaoController');

const router = express.Router();

// Defina as rotas para Leilao
router.get('/', leilaoController.getAllLeiloes);
router.get('/:id', leilaoController.getLeilaoById);
router.post('/', leilaoController.createLeilao);
router.put('/:id', leilaoController.updateLeilao);
router.delete('/:id', leilaoController.deleteLeilao);

module.exports = router;