
const db = require('../config/db');

async function registerUser(req, res) {
  const { Nombre, Direccion, CorreoElectronico, Telefono, NombreUsuario, Contraseña, RolID } = req.body;

  try {
    // Aquí puedes agregar la lógica para validar los datos de entrada

    // Consulta para insertar un nuevo usuario en la base de datos
    const query = `INSERT INTO usuario (Nombre,Direccion,CorreoElectronico,Telefono,NombreUsuario,Contraseña,RolID) VALUES (:Nombre,:Direccion,:CorreoElectronico,:Telefono,:NombreUsuario,:Contraseña,:RolID)`;
    const params = [Nombre, Direccion, CorreoElectronico, Telefono, NombreUsuario, Contraseña, RolID];

    const result = await db.executeQuery(query, params);

    res.status(201).json({ message: 'Usuario registrado exitosamente', result });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
}

async function getUserById(req, res) {
  const { usuarioId } = req.params;

  try {
    const query = `SELECT * FROM USUARIO WHERE USUARIOID = :USUARIOID`;
    const result = await db.executeQuery(query, [usuarioId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar el usuario' });
  }
}

async function getUserByUsername(req, res) {
  const { username } = req.params;

  try {

    const query = `SELECT * FROM USUARIO WHERE NOMBREUSUARIO = :NOMBREUSUARIO`;
    const result = await db.executeQuery(query, [username]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar el usuario' });
  }
}

async function deleteUser(req, res) {
  const { usuarioId } = req.params;

  try {
    const query = `DELETE FROM USUARIO WHERE UsuarioId = :usuarioId`;
    const result = await db.executeQuery(query, [usuarioId]);

    if (result.rowsAffected === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
}

async function getAllUsers(req, res) {
  try {
    const query = `SELECT * FROM USUARIO`;
    const result = await db.executeQuery(query);

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar los usuarios' });
  }
}

module.exports = { 
    registerUser,
    getUserById,
    getUserByUsername,
    deleteUser,
    getAllUsers 
};
