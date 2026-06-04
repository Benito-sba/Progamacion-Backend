// AA 4.2 Pruebas unitarias para Rutas API
// Benito Santiago Balam Acevedo

import request from 'supertest';
import { jest } from '@jest/globals';
import app, { Usuario } from './usuarios.js'; 


describe('Pruebas del API CRUD de Usuarios', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Pruebas 1
  test('GET /usuarios debería retornar la lista de usuarios y status 200', async () => {
    const usuariosFalsos = [{ nombre: 'benito', edad: 22 }, { nombre: 'santiago', edad: 34 }];
    Usuario.find.mockResolvedValue(usuariosFalsos); // Forzamos a que devuelva este array

    const response = await request(app).get('/usuarios');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(usuariosFalsos);
    expect(Usuario.find).toHaveBeenCalledTimes(1);
  });

  // Pruebas 2
  test('GET /usuario/:id debería retornar un solo usuario por ID', async () => {
    const usuarioFalso = { _id: '69f823eb4bbbe33a5a785f77', nombre: 'benito', edad: 22 };
    Usuario.findById.mockResolvedValue(usuarioFalso);

    const response = await request(app).get('/usuario/69f823eb4bbbe33a5a785f77');

    expect(response.status).toBe(200);
    expect(response.body.nombre).toBe('benito');
  });

  // Pruebas 3
  test('DELETE /usuario/:id debería eliminar al usuario y retornar mensaje de éxito', async () => {
    const usuarioBorrado = { _id: '69f823eb', nombre: 'benito' };
    Usuario.findByIdAndDelete.mockResolvedValue(usuarioBorrado);

    const response = await request(app).delete('/usuario/69f823eb');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Usuario eliminado' });
  });

});

