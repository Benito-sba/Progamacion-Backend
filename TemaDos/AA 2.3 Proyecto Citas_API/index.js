
//Benito Santiago Balam Acevedo
//AA 2.3

//EXPRES Y AXIOS
import express from 'express';
import axios from 'axios';

// PUERTO
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

// RUTA
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;
        res.render('index', {
            
            quote: quote,
            character: character,
        });
        console.log(result.data);

        
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }
        res.status(500).send('Error al obtener la cita');
    }
})

// 6. ARANQUE DEL SERVIDOR
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

