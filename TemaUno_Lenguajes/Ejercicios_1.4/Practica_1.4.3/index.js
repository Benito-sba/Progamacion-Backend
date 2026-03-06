
//Benito Santiago Balam Acevedo
// AA 1.4 Framework JS 3



import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log('Servidor ejecutandose en el puerto ' + port);
});


