import { Router } from "express";
import { EstabelecimentoController } from "../controllers/EstabelecimentoController";

const estabelecimentoRouter = Router();
const estabelecimentoController = new EstabelecimentoController();

// Basic CRUD routes
estabelecimentoRouter.post(
  "/",
  estabelecimentoController.create.bind(estabelecimentoController)
);
estabelecimentoRouter.get(
  "/",
  estabelecimentoController.findAll.bind(estabelecimentoController)
);
estabelecimentoRouter.get(
  "/:id",
  estabelecimentoController.findOne.bind(estabelecimentoController)
);
estabelecimentoRouter.put(
  "/:id",
  estabelecimentoController.update.bind(estabelecimentoController)
);
estabelecimentoRouter.delete(
  "/:id",
  estabelecimentoController.delete.bind(estabelecimentoController)
);

// Custom routes
estabelecimentoRouter.get(
  "/cnpj/:cnpj",
  estabelecimentoController.findByCnpj.bind(estabelecimentoController)
);
estabelecimentoRouter.get(
  "/search/name",
  estabelecimentoController.searchByName.bind(estabelecimentoController)
);
estabelecimentoRouter.get(
  "/search/location",
  estabelecimentoController.searchByLocation.bind(estabelecimentoController)
);

export { estabelecimentoRouter };
