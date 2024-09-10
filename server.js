
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
const articleRoutes = require('./app/routes/articulesRoutes.js');

const app = express();
const port = 3000;

app.use(express.json()); // Para poder manejar JSON en las peticiones

// Rutas de usuarios http://localhost:3000/api/users/
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

// rutas de productos
// const productRoutes = require('./app/routes/productRoutes');
// app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
