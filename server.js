
// const express = require('express');
// const db = require('./app/config/db.js');

// const app = express();
// const port = 3000;

// // Iniciar la conexión a la base de datos
// db.initialize();

// app.listen(port, () => {
//   console.log(`Servidor corriendo en http://localhost:${port}`);
// });

// server.js
const express = require('express');
const userRoutes = require('./app/routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json()); // Para poder manejar JSON en las peticiones

// Rutas de usuarios http://localhost:3000/api/users/
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
