// src/entities/Reserva.js
class Reserva {
    constructor({ id, titulo, descricao_reuniao, sala_id, usuario_id, data_inicio, data_fim, criado_em }) {
        this.id = id;
        this.titulo = titulo;
        this.descricao_reuniao = descricao_reuniao;
        this.sala_id = sala_id;
        this.usuario_id = usuario_id;
        this.data_inicio = new Date(data_inicio); // Garante que trabalharemos com objetos Date
        this.data_fim = new Date(data_fim);
        this.criado_em = criado_em;
    }
}

module.exports = Reserva;