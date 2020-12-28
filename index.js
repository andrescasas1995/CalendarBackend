const express = require("express");
require("dotenv").config();
const { dbConnection } = require('./db/config');
const cors = require('cors');

// Crear el servidor de express
const app = express();

//Database
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static("public"));

app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
