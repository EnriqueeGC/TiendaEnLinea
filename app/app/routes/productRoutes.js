const express = require('express');
const { getProductos, addProducto } = require('../controllers/productController');
const router = express.Router();

router.get('/productos', getProductos);
router.post('/productos', addProducto);

module.exports = router;
