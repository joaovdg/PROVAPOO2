const express = require('express');
const lanceController = require('../controllers/lanceController');

const router = express.Router();

// Defina as rotas para Lance
router.get('/', lanceController.getAllLances);
router.get('/:id', lanceController.getLanceById);
router.post('/', lanceController.createLance);
router.put('/:id', lanceController.updateLance);
router.delete('/:id', lanceController.deleteLance);

module.exports = router;