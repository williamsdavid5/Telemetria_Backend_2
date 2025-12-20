const express = require('express');
const { criarUsuario } = require('../controllers/usuariosController');
const router = express.Router();

router.post('/', criarUsuario);

module.exports = router;