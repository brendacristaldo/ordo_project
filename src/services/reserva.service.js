const reservaRepository = require('../repositories/PostgresReservaRepository');
const ReservaFactory = require('../factories/ReservaFactory');
const DefaultConflictStrategy = require('../strategies/DefaultConflictStrategy'); // <-- Importamos a Estratégia

class ReservaService {
    constructor() {
        // O serviço agora tem uma estratégia de verificação de conflitos.
        this.conflictCheckStrategy = new DefaultConflictStrategy();
    }

    async criar(reservaData) {
        const reserva = ReservaFactory.create(reservaData);

        // 1. O serviço DELEGA a verificação de conflitos para o objeto de estratégia.
        await this.conflictCheckStrategy.check(reserva, reservaRepository);

        // 2. Se a estratégia não lançou um erro, o serviço continua seu trabalho.
        const novaReserva = await reservaRepository.criar(reserva);
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