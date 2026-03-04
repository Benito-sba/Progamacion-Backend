/*Benito Santiago Balam Acevedo*/
/* AA 1.4 Framework JS */


import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi página web</h1>");
});

app.get('/about', (req, res) => {
  res.send('Balam endpoint /saludo');
});

app.get("/contac", (req, res) => {
    res.send("<h1>9835565488774554455212</h1>");
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
}
);
