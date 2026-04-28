    // Benito Santiago Balam Acevedo // API Ninja Evaluacion
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));


const API_KEY = 'yCUtmoGBAIHJ3ovizhpH4vxocAgb6sVlbEEkBYBO'; 

app.get("/", async (req, res) => {
  try {
    const marcas = ["Yamaha", "Kawasaki", "Honda", "Ducati", "BMW", "KTM", "Suzuki"];
    const marca = marcas[Math.floor(Math.random() * marcas.length)];

    //  Petición a Ninja API
    const response = await axios.get(`https://api.api-ninjas.com/v1/motorcycles?make=${marca}`, {
      headers: { 'X-Api-Key': API_KEY }
    });

    console.log("--- Datos de la API (JSON) ---");
    console.log(JSON.stringify(response.data[0], null, 2)); 
    console.log("------------------------------");

    const motos = response.data;
    const moto = motos[Math.floor(Math.random() * motos.length)];

    const randomId = Math.floor(Math.random() * 1000);
    const imagenMoto = `https://loremflickr.com/600/800/motorcycle?lock=${randomId}`;

    res.render("index.ejs", {
      moto: moto,
      imagenUrl: imagenMoto
    });
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    res.render("index.ejs", {
      moto: { make: "Error", model: "No disponible", displacement: "N/A", engine: "N/A" },
      imagenUrl: "https://via.placeholder.com/600x800"
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});