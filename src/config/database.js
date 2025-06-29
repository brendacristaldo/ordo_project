// src/config/database.js

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// A classe que vai gerenciar nossa conexão
class Database {
    constructor() {
        // O construtor é o local ideal para a lógica que só deve rodar uma vez.
        if (!Database.instance) {
            console.log('Criando uma nova instância do pool de conexões com o PostgreSQL...');
            this.pool = new Pool({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT || 5432,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            });
            Database.instance = this;
        }

        // Se uma instância já existe, o construtor retorna a instância existente.
        return Database.instance;
    }

    // Método para acessar o pool de conexões
    getPool() {
        return this.pool;
    }
}

// Criamos a instância UMA VEZ...
const instance = new Database();

// ...e congelamos o objeto para garantir que ele não seja modificado em outros lugares.
Object.freeze(instance);

// Exportamos o método para obter o pool, garantindo que seja sempre o mesmo.
module.exports = instance.getPool();