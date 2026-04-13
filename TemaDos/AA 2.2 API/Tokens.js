//Benito Santiago Balam Acevedo

import axios from "axios";

const probarAutenticacionPorToken = async () => {
  try {
    
    console.log("--- Paso 1: Obteniendo el Token ---");
    const respuestaLogin = await axios.post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });

    const miToken = respuestaLogin.data.token;
    console.log('Token recibido:', miToken);

    
    console.log('\n--- Paso 2: Accediendo con Token Válido ---');
    const respuestaProtegida = await axios.get('https://reqres.in/api/users/2', {
      headers: {
        'Authorization': `Bearer ${miToken}`
      }
    });
    console.log('Datos recibidos:', respuestaProtegida.data);

    
    console.log('\n--- Paso 3: Probando Token Inválido ---');
    await axios.get('https://reqres.in/api/users/2', {
      headers: {
        'Authorization': 'Bearer TOKEN_FALSO_123'
      }
    });

  } catch (error) {
    if (error.response) {
      console.error(`Error esperado del servidor: Estado ${error.response.status}`);
      console.error('Mensaje:', error.response.data);
    } else {
      console.error('Error de red:', error.message);
    }
  }
};

probarAutenticacionPorToken();