// aqui fica a lógica de negócio principal para as reservas
const reservaRepository = require('../repositories/PostgresReservaRepository');
const ReservaFactory = require('../factories/ReservaFactory');
const DefaultConflictStrategy = require('../strategies/DefaultConflictStrategy');

class ReservaService {
    constructor() {
        // aqui o serviço agora tem uma estratégia de verificação que ele pode usar
        this.conflictCheckStrategy = new DefaultConflictStrategy();
    }

    async criar(reservaData) {
        // primeiro, uso a factory para ter certeza que o objeto de reserva é válido
        const reserva = ReservaFactory.create(reservaData);

        // depois, eu DELEGO a verificação de conflitos para a minha estratégia
        await this.conflictCheckStrategy.check(reserva, reservaRepository);

        // se a estratégia não deu erro, significa que o caminho está livre para criar a reserva
        const novaReserva = await reservaRepository.criar(reserva);
        return novaReserva;
    }

    async listar(filtros) {
        const { sala_id, data } = filtros;

        if (!sala_id || !data) {
            throw new Error('o ID da sala e a data são obrigatórios para a busca.');
        }

        return await reservaRepository.encontrarPorSalaEData(sala_id, data);
    }
}

module.exports = new ReservaService();