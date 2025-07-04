const express = require('express');
const dotenv = require('dotenv');

// Importando as rotas que criou
const salasRoutes = require('./src/api/salas.routes');
const reservasRoutes = require('./src/api/reservas.routes');

// Carrega as variáveis do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// aqui o Express entender o JSON que a gente manda nas requisições POST
app.use(express.json());

// Rota principal, só pra gente ver se a API está no ar
app.get('/', (req, res) => {
    res.send('API do Projeto Ordo está no ar!');
});

// Aqui a gente "usa" as rotas, definindo um prefixo pra elas
app.use('/api/salas', salasRoutes);
app.use('/api/reservas', reservasRoutes);

// Inicia o servidor pra ele ficar "escutando" na porta que a gente definiu
app.listen(PORT, () => {
    console.log(`Servidor 'Ordo' rodando na porta ${PORT}`);
});