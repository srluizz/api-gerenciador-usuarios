import express from "express";
import userRoutes from "./routes.js";
import Sequelize from "sequelize";
import config from "./src/config/database.js";
import User from "./src/models/User.js";

//EXPRESS
const app = express();
app.use(express.json());

// SEQUELIZE
const sequelize = new Sequelize(config);
User.init(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado");
    app.listen(3000, () => console.log("Servidor on"));
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

app.use("/usuarios", userRoutes);

