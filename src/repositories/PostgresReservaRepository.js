// aqui eu falo diretamente com a tabela de reservas no banco de dados
const db = require('../config/database').getInstance();

class PostgresReservaRepository {
    // cria uma nova reserva no banco
    async criar(reserva) {
        const { titulo, sala_id, usuario_id, data_inicio, data_fim } = reserva;
        const sql = 'INSERT INTO reservas (titulo, sala_id, usuario_id, data_inicio, data_fim) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        
        const resultado = await db.query(sql, [titulo, sala_id, usuario_id, data_inicio, data_fim]);
        return resultado.rows[0];
    }

    // !!aqui é a função mais importante, que busca por reservas no mesmo horário
    async encontrarConflitos(sala_id, data_inicio, data_fim) {
        const sql = `
            SELECT * FROM reservas
            WHERE sala_id = $1
            AND (data_inicio < $2 AND data_fim > $3)
        `;
        // um jeito de pensar nisso é: um conflito existe se uma reserva começa ANTES
        // do fim do meu novo horário e termina DEPOIS do início do meu novo horário.

        const resultado = await db.query(sql, [sala_id, data_fim, data_inicio]);
        return resultado.rows;
    }

    // aqui busca todas as reservas de uma sala em um dia específico
    async encontrarPorSalaEData(sala_id, data) {
        // o `::date` do postgres é ótimo pra ignorar a hora e comparar só o dia
        const sql = 'SELECT * FROM reservas WHERE sala_id = $1 AND data_inicio::date = $2 ORDER BY data_inicio';

        const resultado = await db.query(sql, [sala_id, data]);
        return resultado.rows;
    }
}

module.exports = new PostgresReservaRepository();