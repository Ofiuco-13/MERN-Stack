import express from "express";
import mongoose from "mongoose"; //Cluster: EmmanuelMartinez - alanturing01
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conexion exitosa a la DB"))
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor funcionando en puerto 5000");
});
