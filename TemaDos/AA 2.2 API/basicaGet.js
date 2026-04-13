//Benito Santiago Balam Acevedo

import axios from "axios";

const consultarConLlave = async () => {
  
  const url = "https://reqres.in/api/collections/products/records?project_id=12107";
  const apiKey = "pro_47da985d940ee5592bdc61a41ba8c224f4494878bbcc62129446310ddd045373";

  try {
    const respuesta = await axios.get(url, {
      headers: {
        
        "x-api-key": apiKey
      }
    });
    console.log('Datos de la colección recibidos:', respuesta.data);
  } catch (error) {
    console.error('Error en la petición con llave:', error.response ? error.response.data : error.message);
  }
};

consultarConLlave();