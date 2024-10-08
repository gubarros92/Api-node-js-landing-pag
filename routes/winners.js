const express = require('express');
const router = express.Router();
const Winner = require('../models/Winner');

// Rota para listar todos os ganhadores
router.get('/', async (req, res) => {
    try {
        const winners = await Winner.find();
        res.json(winners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para cadastrar um novo ganhador
router.post('/', async (req, res) => {
    const winner = new Winner({
        name: req.body.name,
        prize: req.body.prize,
        date: req.body.date
    });

    try {
        const newWinner = await winner.save();
        res.status(201).json(newWinner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para remover um ganhador pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const winner = await Winner.findById(req.params.id);
        if (!winner) return res.status(404).json({ message: 'Ganhador não encontrado' });

        await winner.remove();
        res.json({ message: 'Ganhador removido com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
