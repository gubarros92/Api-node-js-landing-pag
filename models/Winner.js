const mongoose = require('mongoose');

// Definindo o esquema de ganhadores
const winnerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prize: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Criando o modelo
const Winner = mongoose.model('Winner', winnerSchema);

module.exports = Winner;
