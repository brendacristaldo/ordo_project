// aqui eu centralizo a conexão com o banco de dados
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

class Database {
    static #instance; // o # torna o campo privado

    // o construtor agora é privado para forçar o uso do getInstance()
    constructor() {
        throw new Error("use Database.getInstance() para obter a instância.");
    }

    // aqui o método que garante que teremos apenas uma instância do pool
    static getInstance() {
        if (!this.#instance) {
            console.log("criando a única instância do pool de conexões com o PostgreSQL...");
            this.#instance = new Pool({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT || 5432,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            });
        }
        return this.#instance;
    }
}

module.exports = Database;