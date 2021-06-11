// importamos express
let express = require("express");
// importamos el controlador de categoria
let Usuario= require("../controllers/usuario");


// Creamos la api para controlar las rutas
let api = express.Router();

// Servicio POST (registrar)   http://localhost:3001/api/registrarUsuario
api.post("/registrarUsuario", Usuario.registrarUsuario);

// Exportamos el modulo
module.exports = api;

// Servicio para el login
api.post("/login", Usuario.login);

