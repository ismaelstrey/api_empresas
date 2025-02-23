import { Router } from "express";
import { EmpresasController } from "../controllers/EmpresasController";

const empresasRouter = Router();
const empresasController = new EmpresasController();

// Basic CRUD routes
empresasRouter.post("/", empresasController.create.bind(empresasController));
empresasRouter.get("/", empresasController.findAll.bind(empresasController));
empresasRouter.get("/:id", empresasController.findOne.bind(empresasController));
empresasRouter.put("/:id", empresasController.update.bind(empresasController));
empresasRouter.delete(
  "/:id",
  empresasController.delete.bind(empresasController)
);

// Custom routes
empresasRouter.get(
  "/cnpj/:cnpj_basico",
  empresasController.findByCnpj.bind(empresasController)
);
empresasRouter.get(
  "/search/name",
  empresasController.searchByName.bind(empresasController)
);

export { empresasRouter };
