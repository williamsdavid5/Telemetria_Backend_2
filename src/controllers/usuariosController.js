const bcrypt = require('bcrypt');
const usuariosRepository = require('../repositories/usuariosRepository');

async function criarUsuario(req, res) {
    try {
        const { nome, email, senha, role } = req.body;
        const { empresa_id } = req.usuario;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Dados obrigatórios ausentes' });
        }

        const senha_hash = await bcrypt.hash(senha, 10);

        const usuario = await usuariosRepository.criarUsuario({
            nome,
            email,
            senha_hash,
            role: role || 'user',
            empresa_id
        });
        return res.status(201).json(usuario);
    } catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({ error: 'Email já cadastrado' });
        }

        console.error(err);
        return res.status(500).json({ error: 'Erro interno' });
    }
}

module.exports = { criarUsuario };