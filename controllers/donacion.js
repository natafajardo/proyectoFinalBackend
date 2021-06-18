const Donacion = require("../models/donacion");

const guardarPlan = (req, res) => {
  const params = req.body;
  const donacion = new Donacion();

  if (
    params.correo &&
    params.nombre &&
    params.nombreUsuario &&
    params.plan &&
    params.monto
  ) {

    donacion.correo = params.correo;
    donacion.nombre = params.nombre;
    donacion.nombreUsuario = params.nombreUsuario;
    donacion.plan = params.plan;
    donacion.monto = params.monto;
    
    donacion.save((err, savedPlan) => {
      if (err) {
        res.status(500).send({ err: "No se registro el plan" });
      } else {
        const response = {
          usuario: savedPlan.nombreUsuario,
          nombre: savedPlan.nombre,
          correo: savedPlan.correo,
          plan: savedPlan.plan,
          monto_mes: savedPlan.plan,
          fechaInicio: savedPlan.fechaInicio,
          fechaRenovacion: savedPlan.fechaRenovacion
        }
        res.status(201).send({ donacion: response , stack: 'Plan activado correctamente!'});
      }
    });
  }

}

donacionPorUsuario = (req, res) => {
  const params = req.body;
}




module.exports = {
  guardarPlan
};

