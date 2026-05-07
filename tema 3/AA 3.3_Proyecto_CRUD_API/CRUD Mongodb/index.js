//BENITO SANTIAGO BALAM ACEVEDO
// AA 3.3 ODM y API's

import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';


const app = express();
const puerto = 3000;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = process.env.uri;

const client = new MongoClient(uri);

let db;

async function conectarDB() {
    try {

        await client.connect();

        db = client.db("Backend");

        console.log("Conexión exitosa a MongoDB");

    } catch (error) {

        console.error("Error al conectar:", error);

    }
}

conectarDB();


app.post('/usuarios', async (req, res) => {
    try {

        const usuario = req.body;

        const resultado = await db
            .collection('usuarios')
            .insertOne(usuario);

        res.status(201).json(resultado);

    } catch (error) {

        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });

    }
});

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});


// seccion 5

app.get('/usuarios', async (req, res)=>{
    try{

        const usuarios = await db
            .collection('usuarios')
            .find()
            .toArray();

        res.status(200).json(usuarios);

    }catch(error){

        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });

    }
});


// seccion 6

app.get('/usuario/:id', async (req, res) => {
    try {

        const {id} = req.params;

        const usuario = await db
            .collection('usuarios')
            .findOne({ _id: new ObjectId(id) });

        res.status(200).json(usuario);

    } catch (error) {

        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });

    }
});


// seccion 7

app.put('/usuario/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const resultado = await db
            .collection('usuarios')
            .updateOne(
                { _id: new ObjectId(id) },
                { $set: req.body }
            );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuarioActualizado = await db
            .collection('usuarios')
            .findOne({ _id: new ObjectId(id) });

        res.status(200).json(usuarioActualizado);

        console.log("Usuario actualizado con éxito:", usuarioActualizado);

    } catch (error) {

        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });

    }
});


// Sección 8

app.delete('/usuario/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const resultado = await db
            .collection('usuarios')
            .deleteOne({ _id: new ObjectId(id) });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado' });

    } catch (error) {

        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });

    }
});


app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});