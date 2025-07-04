const Reserva = require('../entities/Reserva');

class ReservaFactory {
    static create(data) {
        // 1. validação dos dados brutos
        if (!data.titulo || !data.sala_id || !data.usuario_id || !data.data_inicio || !data.data_fim) {
            throw new Error('Dados insuficientes para criar uma reserva. Título, sala, usuário e datas são obrigatórios.');
        }

        // 2. aqui e retorna a instância da entidade Reserva
        // os dados aqui já estão validados e prontos para se tornarem um objeto de domínio.
        return new Reserva(data);
    }
}

module.exports = ReservaFactory;