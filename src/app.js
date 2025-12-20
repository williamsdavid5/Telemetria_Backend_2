const express = require('express');
const pool = require('./config/db');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ ok: true });
})

async function testar() {
    const result = await pool.query('SELECT NOW()');
    console.log(result.rows[0]);
}

testar();

module.exports = app;