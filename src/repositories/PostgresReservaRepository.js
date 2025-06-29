// src/repositories/PostgresReservaRepository.js
const db = require('../config/database');

class PostgresReservaRepository {
    async criar(reserva) {
        const { titulo, sala_id, usuario_id, data_inicio, data_fim } = reserva;
        const sql = 'INSERT INTO reservas (titulo, sala_id, usuario_id, data_inicio, data_fim) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        
        const resultado = await db.query(sql, [titulo, sala_id, usuario_id, data_inicio, data_fim]);
        return resultado.rows[0];
    }

    // Esta é a função mais importante para a nossa regra de negócio!
    async encontrarConflitos(sala_id, data_inicio, data_fim) {
        const sql = `
            SELECT * FROM reservas
            WHERE sala_id = $1
            AND (data_inicio < $2 AND data_fim > $3) -- Verifica sobreposição de horários
        `;
        // Uma reserva conflitante existe se ela começa ANTES do fim do novo horário
        // E termina DEPOIS do início do novo horário.

        const resultado = await db.query(sql, [sala_id, data_fim, data_inicio]);
        return resultado.rows;
    }

     async encontrarPorSalaEData(sala_id, data) {
        // O objetivo é encontrar todas as reservas para uma sala em um dia específico.
        // O `::date` converte o DATETIME para apenas a data, ignorando a hora.
        const sql = 'SELECT * FROM reservas WHERE sala_id = $1 AND data_inicio::date = $2 ORDER BY data_inicio';

        const resultado = await db.query(sql, [sala_id, data]);
        return resultado.rows;
    }

}

module.exports = new PostgresReservaRepository();