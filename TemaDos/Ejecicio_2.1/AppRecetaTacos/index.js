//AA 2.1 API Reporte practico 
//BENITO SANTIAGO BALAM ACEVEDO

import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;

// Leer y deserializar el JSON
const recetaData = fs.readFileSync("./recetaTacos.json", "utf-8");
const recetasTacos = JSON.parse(recetaData);

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.json());

// Endpoint para obtener una receta por tipo de proteína
app.get("/receta/:type", (req, res) => {
    const tipoSolicitado = req.params.type.toLowerCase();
    
    // CORRECCIÓN: Buscamos dentro de ingredientes -> proteina -> nombre
    const recetaEncontrada = recetasTacos.find(taco => 
        taco.ingredientes.proteina.nombre.toLowerCase() === tipoSolicitado
    );

    if (recetaEncontrada) {
        res.json(recetaEncontrada);
    } else {
        res.status(404).json({ error: "Receta no encontrada" });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});