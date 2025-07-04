const salaRepository = require('../repositories/PostgresSalaRepository');

class SalaService {
    async listarTodas() {
        return await salaRepository.encontrarTodas();
    }

    async criar(salaData) {
        // Aqui poderiam entrar regras de negócio, como "não permitir salas com o mesmo nome".
        // Por enquanto, vamos apenas chamar o repositório.
        if (!salaData.nome) {
            throw new Error('O nome da sala é obrigatório.');
        }
        return await salaRepository.criar(salaData);
    }
}

module.exports = new SalaService();