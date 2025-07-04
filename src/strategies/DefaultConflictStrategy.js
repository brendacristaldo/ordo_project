// aqui eu encapsulo o algoritmo que verifica se há conflitos de horário
class DefaultConflictStrategy {
    /**
     * o método principal da minha estratégia
     * @param {Reserva} reserva - o objeto de reserva que eu quero verificar
     * @param {PostgresReservaRepository} repository - o repositório que sabe buscar no banco
     */
    async check(reserva, repository) {
        // chamo a função do repositório que faz a busca por conflitos
        const conflitos = await repository.encontrarConflitos(
            reserva.sala_id,
            reserva.data_inicio,
            reserva.data_fim
        );

        // se a lista de conflitos não estiver vazia, eu lanço o erro
        if (conflitos.length > 0) {
            throw new Error('horário indisponível. já existe uma reserva neste período.');
        }
    }
}

module.exports = DefaultConflictStrategy;