"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empresasRouter = void 0;
const express_1 = require("express");
const EmpresasController_1 = require("../controllers/EmpresasController");
const empresasRouter = (0, express_1.Router)();
exports.empresasRouter = empresasRouter;
const empresasController = new EmpresasController_1.EmpresasController();
// Basic CRUD routes
empresasRouter.post("/", empresasController.create.bind(empresasController));
empresasRouter.get("/", empresasController.findAll.bind(empresasController));
empresasRouter.get("/:id", empresasController.findOne.bind(empresasController));
empresasRouter.put("/:id", empresasController.update.bind(empresasController));
empresasRouter.delete("/:id", empresasController.delete.bind(empresasController));
// Custom routes
empresasRouter.get("/cnpj/:cnpj_basico", empresasController.findByCnpj.bind(empresasController));
empresasRouter.get("/search/name", empresasController.searchByName.bind(empresasController));
