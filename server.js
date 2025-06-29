const express = require('express');
const dotenv = require('dotenv');

// 1. Importe a nova rota
const salasRoutes = require('./src/api/salas.routes');
const reservasRoutes = require('./src/api/reservas.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Linha necessária para o express entender JSON no corpo das requisições
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do Projeto Ordo está no ar!');
});

// 2. Use a rota, definindo um prefixo para ela
app.use('/api/salas', salasRoutes);
app.use('/api/reservas', reservasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor 'Ordo' rodando na porta ${PORT}`);
});
