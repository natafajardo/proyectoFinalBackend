let mongoose = require("mongoose");

let Schema = mongoose.Schema;

const oneYear = 365 * 24 * 60 * 60 * 1000;
const myOneYearLater = function() { return new Date(Date.now() + oneYear);};

let donacionSchema = Schema({
    correo: String,
    nombre: String,
    nombreUsuario: String,
    plan: String,
    monto_mes: Number,
    fechaInicio: { type: Date, default: Date.now },
    fechaRenovacion: { type: Date, default: myOneYearLater },
  });
  

  module.exports = mongoose.model("donaciones", donacionSchema);

 