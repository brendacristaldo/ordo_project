const salaService = require('../services/sala.service');

class SalaController {
    async listar(req, res) {
        try {
            const salas = await salaService.listarTodas();
            res.status(200).json(salas);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar salas.' });
        }
    }

    async criar(req, res) {
        try {
            // Os dados da nova sala vêm no corpo (body) da requisição
            const novaSala = await salaService.criar(req.body);
            // O status 201 Created é o correto para criação de recursos
            res.status(201).json(novaSala);
        } catch (error) {
            console.error('ERRO DETALHADO NO CONTROLLER:', error);
            res.status(400).json({ message: error.message }); // 400 para erro do cliente
        }
    }
}

module.exports = new SalaController();