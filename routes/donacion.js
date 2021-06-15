// importamos express
let express = require("express");
// importamos el controlador de categoria
let Donacion = require("../controllers/donacion");


// Creamos la api para controlar las rutas
let api = express.Router();

// Servicio POST (tomar plan)   http://localhost:3001/api/guardarPlan
api.post("/donacion", Donacion.guardarPlan);

// Exportamos el modulo
module.exports = api;


