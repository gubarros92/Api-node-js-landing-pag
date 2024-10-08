require('dotenv').config();  // Carrega variáveis de ambiente do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Para permitir requisições de outras origens
const app = express();
const port = process.env.PORT || 3000;

// Conectando ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));


// Middleware para parsing JSON e CORS
app.use(cors());
app.use(express.json());

// Importando as rotas
const winnersRoutes = require('./routes/winners');
app.use('/api/winners', winnersRoutes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
