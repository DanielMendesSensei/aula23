import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Configuração base
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meu projeto Express",
      version: "1.0.0",
      description: "Um api simples",
    },
    servers: [{ url: "http://localhost:3003", description: "Servidor local" }],
  },
  // Ler os comentários com as instruções para o swagger renderizar a documentação
  apis: ["./src/routes/*.js", "./src/models/*.js"], // Lê todos os arquivos .js dentro da pasta routes
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiServe = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup;
