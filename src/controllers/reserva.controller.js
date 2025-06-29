const reservaService = require('../services/reserva.service');

class ReservaController {
    async criar(req, res) {
        try {
            const novaReserva = await reservaService.criar(req.body);
            res.status(201).json(novaReserva);
        } catch (error) {
            // Se o serviço lançar um erro (ex: horário indisponível), ele será capturado aqui.
            res.status(400).json({ message: error.message });
        }
    }

    async listar(req, res) {
        try {
            // Os filtros virão como "query parameters" na URL.
            // Ex: /api/reservas?sala_id=1&data=2025-07-15
            const reservas = await reservaService.listar(req.query);
            res.status(200).json(reservas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new ReservaController();