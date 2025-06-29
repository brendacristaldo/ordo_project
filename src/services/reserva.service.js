// src/services/reserva.service.js
const reservaRepository = require('../repositories/PostgresReservaRepository');
const ReservaFactory = require('../factories/ReservaFactory'); // <-- Importamos a Factory

class ReservaService {
    async criar(reservaData) {
        // Usa a Factory para criar e validar o objeto Reserva a partir dos dados brutos
        const reserva = ReservaFactory.create(reservaData);

        // A partir daqui, trabalhamos com o objeto "reserva" limpo, e não com "reservaData"
        const conflitos = await reservaRepository.encontrarConflitos(reserva.sala_id, reserva.data_inicio, reserva.data_fim);

        if (conflitos.length > 0) {
            throw new Error('Horário indisponível. Já existe uma reserva neste período.');
        }

        // Passamos o objeto limpo para o repositório
        const novaReserva = await reservaRepository.criar(reserva);
        return novaReserva;
    }

    async listar(filtros) {
        // ... (código existente) ...
    }
}

module.exports = new ReservaService();