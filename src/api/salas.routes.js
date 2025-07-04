// src/api/salas.routes.js
const express = require('express');
const router = express.Router();
const salaController = require('../controllers/sala.controller');

// Rota GET existente
router.get('/', salaController.listar);

// Rota POST para criar uma nova sala
router.post('/', salaController.criar);

module.exports = router;