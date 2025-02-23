import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const docsRouter = Router();

// Serve Swagger UI
docsRouter.use("/", swaggerUi.serve);
docsRouter.get(
  "/",
  swaggerUi.setup(swaggerDocument, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "BAC Empresas API Documentation",
  })
);

export { docsRouter };
