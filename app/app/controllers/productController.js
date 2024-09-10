const ARTICULO = require('../config/db');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    const productos = await Articulo.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Añadir un producto
exports.addProducto = async (req, res) => {
  const { marca, descripcion, estado, precio } = req.body;
  try {
    const nuevoProducto = await Articulo.create({ marca, descripcion, estado, precio });
    res.json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir el producto', error });
  }
};
