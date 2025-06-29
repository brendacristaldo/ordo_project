// Arquivo: src/repositories/PostgresSalaRepository.js
// VERIFIQUE SE O SEU ARQUIVO ESTÁ EXATAMENTE ASSIM:

const db = require('../config/database');

class PostgresSalaRepository {
    // --- MÉTODO USADO PELA ROTA GET QUE ESTÁ TRAVANDO ---
    // Verifique se este método está exatamente assim, especialmente a linha do "return".
    async encontrarTodas() {
        const resultado = await db.query('SELECT * FROM salas ORDER BY id');
        return resultado.rows; // Se esta linha faltar, a requisição ficará "pendurada" para sempre!
    }

    // --- MÉTODO USADO PELA ROTA POST QUE FUNCIONOU NO INSOMNIA ---
    async criar(sala) {
        const { nome, descricao, capacidade } = sala;
        const sql = 'INSERT INTO salas (nome, descricao, capacidade) VALUES ($1, $2, $3) RETURNING *';
        
        const resultado = await db.query(sql, [nome, descricao, capacidade]);
        return resultado.rows[0];
    }
}

module.exports = new PostgresSalaRepository();