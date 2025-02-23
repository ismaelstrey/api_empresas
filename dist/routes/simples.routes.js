"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplesRouter = void 0;
const express_1 = require("express");
const SimplesController_1 = require("../controllers/SimplesController");
const simplesRouter = (0, express_1.Router)();
exports.simplesRouter = simplesRouter;
const simplesController = new SimplesController_1.SimplesController();
// Basic CRUD routes
simplesRouter.post("/", simplesController.create.bind(simplesController));
simplesRouter.get("/", simplesController.findAll.bind(simplesController));
simplesRouter.get("/:id", simplesController.findOne.bind(simplesController));
simplesRouter.put("/:id", simplesController.update.bind(simplesController));
simplesRouter.delete("/:id", simplesController.delete.bind(simplesController));
// Custom routes
simplesRouter.get("/cnpj/:cnpj_basico", simplesController.findByCnpjBasico.bind(simplesController));
simplesRouter.get("/optantes/simples", simplesController.findSimples.bind(simplesController));
simplesRouter.get("/optantes/mei", simplesController.findMEI.bind(simplesController));
