// Variable donde importamos el jwt
let jwt = require("jwt-simple");
// Importamos libreria para fechas
let moment = require("moment");
// Clave secreta
let secret = "fundacion12yj";

// Exportamos el token generado enviando los datos del usuario
exports.createToken =  (usuario) => {
    let payload = {
      _id: usuario._id,
      correo: usuario.correo,
      nombre: usuario.nombre,
      nombreUsuario: usuario.nombreUsuario,
    
      iat: moment().unix(),
      //exp: moment.add(10, "days").unix(),
    };
    // se retorna el token codificado
    return jwt.encode(payload, secret);
};
