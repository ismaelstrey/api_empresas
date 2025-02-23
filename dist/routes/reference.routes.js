"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.referenceRouter = void 0;
const express_1 = require("express");
const ReferenceControllers_1 = require("../controllers/ReferenceControllers");
// Initialize controllers
const cnaeController = new ReferenceControllers_1.CnaeController();
const naturezaJuridicaController = new ReferenceControllers_1.NaturezaJuridicaController();
const paisController = new ReferenceControllers_1.PaisController();
const municipioController = new ReferenceControllers_1.MunicipioController();
const motivoController = new ReferenceControllers_1.MotivoController();
const qualificacaoSocioController = new ReferenceControllers_1.QualificacaoSocioController();
const referenciaController = new ReferenceControllers_1.ReferenciaController();
// Create routers
const referenceRouter = (0, express_1.Router)();
exports.referenceRouter = referenceRouter;
// CNAE routes
const cnaeRouter = (0, express_1.Router)();
cnaeRouter.post("/", cnaeController.create.bind(cnaeController));
cnaeRouter.get("/", cnaeController.findAll.bind(cnaeController));
cnaeRouter.get("/:id", cnaeController.findOne.bind(cnaeController));
cnaeRouter.put("/:id", cnaeController.update.bind(cnaeController));
cnaeRouter.delete("/:id", cnaeController.delete.bind(cnaeController));
// Natureza Jurídica routes
const naturezaJuridicaRouter = (0, express_1.Router)();
naturezaJuridicaRouter.post("/", naturezaJuridicaController.create.bind(naturezaJuridicaController));
naturezaJuridicaRouter.get("/", naturezaJuridicaController.findAll.bind(naturezaJuridicaController));
naturezaJuridicaRouter.get("/:id", naturezaJuridicaController.findOne.bind(naturezaJuridicaController));
naturezaJuridicaRouter.put("/:id", naturezaJuridicaController.update.bind(naturezaJuridicaController));
naturezaJuridicaRouter.delete("/:id", naturezaJuridicaController.delete.bind(naturezaJuridicaController));
// País routes
const paisRouter = (0, express_1.Router)();
paisRouter.post("/", paisController.create.bind(paisController));
paisRouter.get("/", paisController.findAll.bind(paisController));
paisRouter.get("/:id", paisController.findOne.bind(paisController));
paisRouter.put("/:id", paisController.update.bind(paisController));
paisRouter.delete("/:id", paisController.delete.bind(paisController));
// Município routes
const municipioRouter = (0, express_1.Router)();
municipioRouter.post("/", municipioController.create.bind(municipioController));
municipioRouter.get("/", municipioController.findAll.bind(municipioController));
municipioRouter.get("/:id", municipioController.findOne.bind(municipioController));
municipioRouter.put("/:id", municipioController.update.bind(municipioController));
municipioRouter.delete("/:id", municipioController.delete.bind(municipioController));
// Motivo routes
const motivoRouter = (0, express_1.Router)();
motivoRouter.post("/", motivoController.create.bind(motivoController));
motivoRouter.get("/", motivoController.findAll.bind(motivoController));
motivoRouter.get("/:id", motivoController.findOne.bind(motivoController));
motivoRouter.put("/:id", motivoController.update.bind(motivoController));
motivoRouter.delete("/:id", motivoController.delete.bind(motivoController));
// Qualificação Sócio routes
const qualificacaoSocioRouter = (0, express_1.Router)();
qualificacaoSocioRouter.post("/", qualificacaoSocioController.create.bind(qualificacaoSocioController));
qualificacaoSocioRouter.get("/", qualificacaoSocioController.findAll.bind(qualificacaoSocioController));
qualificacaoSocioRouter.get("/:id", qualificacaoSocioController.findOne.bind(qualificacaoSocioController));
qualificacaoSocioRouter.put("/:id", qualificacaoSocioController.update.bind(qualificacaoSocioController));
qualificacaoSocioRouter.delete("/:id", qualificacaoSocioController.delete.bind(qualificacaoSocioController));
// Referência routes
const referenciaRouter = (0, express_1.Router)();
referenciaRouter.post("/", referenciaController.create.bind(referenciaController));
referenciaRouter.get("/", referenciaController.findAll.bind(referenciaController));
referenciaRouter.get("/:id", referenciaController.findOne.bind(referenciaController));
referenciaRouter.put("/:id", referenciaController.update.bind(referenciaController));
referenciaRouter.delete("/:id", referenciaController.delete.bind(referenciaController));
// Mount all reference routes
referenceRouter.use("/cnae", cnaeRouter);
referenceRouter.use("/natureza-juridica", naturezaJuridicaRouter);
referenceRouter.use("/pais", paisRouter);
referenceRouter.use("/municipio", municipioRouter);
referenceRouter.use("/motivo", motivoRouter);
referenceRouter.use("/qualificacao-socio", qualificacaoSocioRouter);
referenceRouter.use("/referencia", referenciaRouter);
