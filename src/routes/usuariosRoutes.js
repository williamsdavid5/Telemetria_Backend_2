const express = require('express');
const { criarUsuario } = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, criarUsuario);

module.exports = router;