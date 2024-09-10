const db = require('../config/db.js');

async function createArticulo(req, res){
    const { articuloID, marca, descripcion, estado, precio} = req.body;

    try {
        const query = `INSERT INTO ARTICULO (ARTICULOID, MARCA, DESCRIPCION, ESTADO, PRECIO) VALUES (:ARTICULOID, :MARCA, :DESCRIPCION, :ESTADO, :PRECIO)`;
        const params = [articuloID, marca, descripcion, estado, precio];

        const result = await db.executeQuery(query, params);

        res.status(201).json({ message: 'Articulo registrado exitosamente', result });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el articulo' });
    };
};

async function getAllArticulos(req, res){
    try {
        const query = `SELECT * FROM ARTICULO`;
        const result = await db.executeQuery(query);

        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar los articulos' });
    };
}

async function getArticuloById(req, res){
    const { articuloID } = req.params;

    try {
        const query = `SELECT * FROM ARTICULO WHERE ARTICULOID = :ARTICULOID`;
        const result = await db.executeQuery(query, [articuloID]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Articulo no encontrado' });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el articulo' });
    };
};

async function deleteArticulo(req, res){
    const { articuloID } = req.params;

    try {
        const query = `DELETE FROM ARTICULO WHERE ARTICULOID = :ARTICULOID`;
        const result = await db.executeQuery(query, [articuloID]);

        if (result.rowsAffected === 0) {
            return res.status(404).json({ message: 'Articulo no encontrado' });
        }

        res.status(200).json({ message: 'Articulo eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el articulo' });
    };
};

module.exports = { 
    createArticulo,
    getArticuloById,
    getAllArticulos,
    deleteArticulo
};