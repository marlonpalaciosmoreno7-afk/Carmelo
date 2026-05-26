import express from 'express';
import { conectarDB } from './config/db.js';

const app = express();

// Middleware para recibir JSON en los endpoints
app.use(express.json());

// Conectar base de datos
conectarDB();

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.json({ mensaje: "API de TecnoCorte lista para el CRUD" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});