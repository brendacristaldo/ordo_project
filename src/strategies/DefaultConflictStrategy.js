// src/strategies/DefaultConflictStrategy.js

// Esta classe contém o algoritmo para verificar conflitos de reserva.
class DefaultConflictStrategy {
    /**
     * Verifica se a reserva desejada conflita com alguma existente.
     * @param {Reserva} reserva - O objeto de reserva a ser verificado.
     * @param {PostgresReservaRepository} repository - O repositório para buscar dados.
     */
    async check(reserva, repository) {
        console.log('Executando a Estratégia de Verificação de Conflitos Padrão...');

        const conflitos = await repository.encontrarConflitos(
            reserva.sala_id,
            reserva.data_inicio,
            reserva.data_fim
        );

        if (conflitos.length > 0) {
            // Se a estratégia encontra um conflito, ela mesma lança o erro.
            throw new Error('Horário indisponível. Já existe uma reserva neste período.');
        }

        console.log('Nenhum conflito encontrado pela estratégia.');
    }
}

module.exports = DefaultConflictStrategy;