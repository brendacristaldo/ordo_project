// aqui eu falo diretamente com a tabela de salas no banco de dados
const db = require('../config/database').getInstance();

class PostgresSalaRepository {
    // busca todas as salas que existem
    async encontrarTodas() {
        const resultado = await db.query('SELECT * FROM salas ORDER BY id');
        return resultado.rows;
    }

    // aqui cria uma nova sala no banco
    async criar(sala) {
        const { nome, descricao, capacidade } = sala;
        const sql = 'INSERT INTO salas (nome, descricao, capacidade) VALUES ($1, $2, $3) RETURNING *';
        
        const resultado = await db.query(sql, [nome, descricao, capacidade]);
        return resultado.rows[0];
    }
}

module.exports = new PostgresSalaRepository();