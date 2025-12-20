const express = require('express');
const pool = require('./config/db');

const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ ok: true });
})

app.use('/usuarios', usuariosRoutes);



module.exports = app;