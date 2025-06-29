const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controller');

router.post('/', reservaController.criar);
// Rota GET para listar as reservas
router.get('/', reservaController.listar);

module.exports = router;