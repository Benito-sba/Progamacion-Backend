

//Benito Santiago Balam Acevedo
// AA 1.4 Framework JS 3



import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var nombreEquipo = "";

function registrador(req, res, next) {
  console.log(req.body); 

  // espacio entre las palabras
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"];

  next(); 
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(registrador);

app.post("/submit", (req, res) => {
  res.send(`El nombre de tu equipo:<br><br>${nombreEquipo} ✌️`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});