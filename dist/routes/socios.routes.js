"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sociosRouter = void 0;
const express_1 = require("express");
const SociosController_1 = require("../controllers/SociosController");
const sociosRouter = (0, express_1.Router)();
exports.sociosRouter = sociosRouter;
const sociosController = new SociosController_1.SociosController();
// Basic CRUD routes
sociosRouter.post("/", sociosController.create.bind(sociosController));
sociosRouter.get("/", sociosController.findAll.bind(sociosController));
sociosRouter.get("/:id", sociosController.findOne.bind(sociosController));
sociosRouter.put("/:id", sociosController.update.bind(sociosController));
sociosRouter.delete("/:id", sociosController.delete.bind(sociosController));
// Custom routes
sociosRouter.get("/empresa/:cnpj", sociosController.findByCompanyCnpj.bind(sociosController));
sociosRouter.get("/cpf-cnpj/:cpf_cnpj", sociosController.findByCpfCnpj.bind(sociosController));
sociosRouter.get("/search/name", sociosController.searchByName.bind(sociosController));
