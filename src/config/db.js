import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('🚀 Conexión exitosa a MongoDB con Mongoose');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error.message);
        process.exit(1); 
    }
};