// app/routes/userRoutes.js
const express = require('express');
const {
    registerUser,
    getUserById,
    getUserByUsername,
    deleteUser,
    getAllUsers,
    loginUser
} = require('../controllers/userController');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);
router.get('/findAlls', getAllUsers);
router.get('/findBy/:usuarioId', getUserById);
router.get('/findByUsername/:username', getUserByUsername);
router.delete('/deleteById/:usuarioId', deleteUser);

// Inicio de Sesion
router.post('/login', loginUser);

module.exports = router;
