import { Router } from "express";
import { SociosController } from "../controllers/SociosController";

const sociosRouter = Router();
const sociosController = new SociosController();

// Basic CRUD routes
sociosRouter.post("/", sociosController.create.bind(sociosController));
sociosRouter.get("/", sociosController.findAll.bind(sociosController));
sociosRouter.get("/:id", sociosController.findOne.bind(sociosController));
sociosRouter.put("/:id", sociosController.update.bind(sociosController));
sociosRouter.delete("/:id", sociosController.delete.bind(sociosController));

// Custom routes
sociosRouter.get(
  "/empresa/:cnpj",
  sociosController.findByCompanyCnpj.bind(sociosController)
);
sociosRouter.get(
  "/cpf-cnpj/:cpf_cnpj",
  sociosController.findByCpfCnpj.bind(sociosController)
);
sociosRouter.get(
  "/search/name",
  sociosController.searchByName.bind(sociosController)
);

export { sociosRouter };
