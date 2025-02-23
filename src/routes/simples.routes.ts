import { Router } from "express";
import { SimplesController } from "../controllers/SimplesController";

const simplesRouter = Router();
const simplesController = new SimplesController();

// Basic CRUD routes
simplesRouter.post("/", simplesController.create.bind(simplesController));
simplesRouter.get("/", simplesController.findAll.bind(simplesController));
simplesRouter.get("/:id", simplesController.findOne.bind(simplesController));
simplesRouter.put("/:id", simplesController.update.bind(simplesController));
simplesRouter.delete("/:id", simplesController.delete.bind(simplesController));

// Custom routes
simplesRouter.get(
  "/cnpj/:cnpj_basico",
  simplesController.findByCnpjBasico.bind(simplesController)
);
simplesRouter.get(
  "/optantes/simples",
  simplesController.findSimples.bind(simplesController)
);
simplesRouter.get(
  "/optantes/mei",
  simplesController.findMEI.bind(simplesController)
);

export { simplesRouter };
