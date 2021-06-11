let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let port = process.env.PORT || 3001;

let app = express();

mongoose.connect(
    "mongodb://localhost:27017/backenddb",
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log("Servidor DB: ON");
        app.listen(port, function () {
          console.log("Servidor Backend funcionando en el puerto :" + port);
        });
      }
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;



//routes
let usuarioRoutes = require("./routes/usuario");

// conexion a BD
mongoose.connect(
  "mongodb://localhost:27017/backenddb",
  { useUnifiedTopology: true,useNewUrlParser: true},
  (err,res) => {

  }
);

// codificación de la url
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// usar las rutas

app.use("/api",usuarioRoutes)

// exportar la app
module.exports = app;


  