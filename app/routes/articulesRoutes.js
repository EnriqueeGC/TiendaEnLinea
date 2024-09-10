const express = require('express');
const {
    createArticulo,
    getArticuloById,
    getAllArticulos,
    deleteArticulo
} = require('../controllers/articuloController');

const router = express.Router();

// Ruta para registrar un articulo
router.post('/register', createArticulo);
router.get('/findBy/:articuloID', getArticuloById);
router.get('/findAlls', getAllArticulos);
router.delete('/deleteById/:articuloID', deleteArticulo);

module.exports = router;