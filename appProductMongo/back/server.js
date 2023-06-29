import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import router from './router/routes.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use('/api/v1/products',router);




// app.get('/',(req,res)=>{
//     res.send('hola mundo')
// })

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

// app.listen(PORT, ()=>{
//     connectDB(MONGO_URI);
//     console.log('conexion a mongo');
//     console.log(`Conectados desde el puerto${PORT} `);
// })

const start = async()=>{
    try {
        connectDB(MONGO_URI);
        console.log('conexion a mongo');
        app.listen(PORT, ()=>{
            console.log(`CONECTADO DESDE EL PUERTO ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();