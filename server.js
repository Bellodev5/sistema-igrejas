import express from "express";
import cors from "cors";
import pessoasRoutes from "./routes/pessoas.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pessoas", pessoasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});