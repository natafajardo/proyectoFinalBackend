let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let usuarioSchema = Schema({
    correo: String,
    nombre: String,
    nombreUsuario: String,
    pass: String,
    fechaRegistro: { type: Date, default: Date.now },
  });
  

  module.exports = mongoose.model("usuario", usuarioSchema)

 