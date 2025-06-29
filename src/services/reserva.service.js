// src/services/reserva.service.js
const reservaRepository = require('../repositories/PostgresReservaRepository');

class ReservaService {
    async criar(reservaData) {
        const { sala_id, data_inicio, data_fim } = reservaData;

        // 1. Validação básica de entrada
        if (!sala_id || !data_inicio || !data_fim) {
            throw new Error('Sala, data de início e data de fim são obrigatórios.');
        }

        // 2. Chama o repositório para buscar por reservas conflitantes
        const conflitos = await reservaRepository.encontrarConflitos(sala_id, data_inicio, data_fim);

        // 3. A Regra de Negócio Principal!
        if (conflitos.length > 0) {
            // Se a lista de conflitos não estiver vazia, lança um erro.
            throw new Error('Horário indisponível. Já existe uma reserva neste período.');
        }

        // 4. Se não houver conflitos, cria a reserva.
        const novaReserva = await reservaRepository.criar(reservaData);
        return novaReserva;
    }

    async listar(filtros) {
        const { sala_id, data } = filtros;

        if (!sala_id || !data) {
            throw new Error('O ID da sala e a data são obrigatórios para a busca.');
        }

        return await reservaRepository.encontrarPorSalaEData(sala_id, data);
    }
}

module.exports = new ReservaService();