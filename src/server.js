import express from "express";
import router from "./routes/user.routes.js";
import { swaggerSpec, swaggerUiServe, swaggerUiSetup } from "./swagger.js";
import cors from "cors";

const app = express();
const cors_config = { origin: "http://localhost:5500" };

app.use(express.json());
app.use(cors(cors_config));

app.use("/users", router);

app.use("/api-docs", swaggerUiServe, swaggerUiSetup(swaggerSpec));

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Rodando a api na porta ${PORT}`);
});
