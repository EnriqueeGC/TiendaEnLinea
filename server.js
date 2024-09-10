
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
const productRoutes = require('./app/routes/productRoutes'); 
const userRoutes = require('./app/routes/userRoutes'); 

const port = 3001;
const app = express();
app.use(express.json()); // Para poder manejar JSON en las peticiones

// Rutas de usuarios http://localhost:3001/api/users/
// Rutas de Productos http://localhost:3001/api/productos/

app.use('/api/users', userRoutes);
app.use('/api/productos', productRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

