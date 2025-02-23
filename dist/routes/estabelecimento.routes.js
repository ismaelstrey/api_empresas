"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estabelecimentoRouter = void 0;
const express_1 = require("express");
const EstabelecimentoController_1 = require("../controllers/EstabelecimentoController");
const estabelecimentoRouter = (0, express_1.Router)();
exports.estabelecimentoRouter = estabelecimentoRouter;
const estabelecimentoController = new EstabelecimentoController_1.EstabelecimentoController();
// Basic CRUD routes
estabelecimentoRouter.post("/", estabelecimentoController.create.bind(estabelecimentoController));
estabelecimentoRouter.get("/", estabelecimentoController.findAll.bind(estabelecimentoController));
estabelecimentoRouter.get("/:id", estabelecimentoController.findOne.bind(estabelecimentoController));
estabelecimentoRouter.put("/:id", estabelecimentoController.update.bind(estabelecimentoController));
estabelecimentoRouter.delete("/:id", estabelecimentoController.delete.bind(estabelecimentoController));
// Custom routes
estabelecimentoRouter.get("/cnpj/:cnpj", estabelecimentoController.findByCnpj.bind(estabelecimentoController));
estabelecimentoRouter.get("/search/name", estabelecimentoController.searchByName.bind(estabelecimentoController));
estabelecimentoRouter.get("/search/location", estabelecimentoController.searchByLocation.bind(estabelecimentoController));
