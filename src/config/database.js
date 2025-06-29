// src/config/database.js
const { Pool } = require('pg'); // Importa o Pool do pacote 'pg'
const dotenv = require('dotenv');

dotenv.config();

// Cria o pool de conexões com as configurações do PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Porta padrão do Postgres
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

console.log('Conexão com o banco de dados PostgreSQL estabelecida.');

module.exports = pool;