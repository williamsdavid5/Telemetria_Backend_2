const pool = require('../config/db');

async function criarUsuario({ nome, email, senha_hash, role }) {
    const result = await pool.query(
        `
            INSERT INTO usuarios (nome, email, senha_hash, role)
            VALUES($1, $2, $3, $4)
            RETURNING id, nome, email, role
        `,
        [nome, email, senha_hash, role]
    );
    return result.rows[0];
}

module.exports = { criarUsuario };