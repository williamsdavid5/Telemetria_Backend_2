const pool = require('../config/db');

async function criarUsuario({ nome, email, senha_hash, role, empresa_id }) {
    const result = await pool.query(
        `
            INSERT INTO usuarios (nome, email, senha_hash, role, empresa_id)
            VALUES($1, $2, $3, $4, $5)
            RETURNING id, nome, email, role
        `,
        [nome, email, senha_hash, role, empresa_id]
    );
    return result.rows[0];
}

module.exports = { criarUsuario };