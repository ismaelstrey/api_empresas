import { Router } from "express";
import {
  CnaeController,
  NaturezaJuridicaController,
  PaisController,
  MunicipioController,
  MotivoController,
  QualificacaoSocioController,
  ReferenciaController,
} from "../controllers/ReferenceControllers";

// Initialize controllers
const cnaeController = new CnaeController();
const naturezaJuridicaController = new NaturezaJuridicaController();
const paisController = new PaisController();
const municipioController = new MunicipioController();
const motivoController = new MotivoController();
const qualificacaoSocioController = new QualificacaoSocioController();
const referenciaController = new ReferenciaController();

// Create routers
const referenceRouter = Router();

// CNAE routes
const cnaeRouter = Router();
cnaeRouter.post("/", cnaeController.create.bind(cnaeController));
cnaeRouter.get("/", cnaeController.findAll.bind(cnaeController));
cnaeRouter.get("/:id", cnaeController.findOne.bind(cnaeController));
cnaeRouter.put("/:id", cnaeController.update.bind(cnaeController));
cnaeRouter.delete("/:id", cnaeController.delete.bind(cnaeController));

// Natureza Jurídica routes
const naturezaJuridicaRouter = Router();
naturezaJuridicaRouter.post(
  "/",
  naturezaJuridicaController.create.bind(naturezaJuridicaController)
);
naturezaJuridicaRouter.get(
  "/",
  naturezaJuridicaController.findAll.bind(naturezaJuridicaController)
);
naturezaJuridicaRouter.get(
  "/:id",
  naturezaJuridicaController.findOne.bind(naturezaJuridicaController)
);
naturezaJuridicaRouter.put(
  "/:id",
  naturezaJuridicaController.update.bind(naturezaJuridicaController)
);
naturezaJuridicaRouter.delete(
  "/:id",
  naturezaJuridicaController.delete.bind(naturezaJuridicaController)
);

// País routes
const paisRouter = Router();
paisRouter.post("/", paisController.create.bind(paisController));
paisRouter.get("/", paisController.findAll.bind(paisController));
paisRouter.get("/:id", paisController.findOne.bind(paisController));
paisRouter.put("/:id", paisController.update.bind(paisController));
paisRouter.delete("/:id", paisController.delete.bind(paisController));

// Município routes
const municipioRouter = Router();
municipioRouter.post("/", municipioController.create.bind(municipioController));
municipioRouter.get("/", municipioController.findAll.bind(municipioController));
municipioRouter.get(
  "/:id",
  municipioController.findOne.bind(municipioController)
);
municipioRouter.put(
  "/:id",
  municipioController.update.bind(municipioController)
);
municipioRouter.delete(
  "/:id",
  municipioController.delete.bind(municipioController)
);

// Motivo routes
const motivoRouter = Router();
motivoRouter.post("/", motivoController.create.bind(motivoController));
motivoRouter.get("/", motivoController.findAll.bind(motivoController));
motivoRouter.get("/:id", motivoController.findOne.bind(motivoController));
motivoRouter.put("/:id", motivoController.update.bind(motivoController));
motivoRouter.delete("/:id", motivoController.delete.bind(motivoController));

// Qualificação Sócio routes
const qualificacaoSocioRouter = Router();
qualificacaoSocioRouter.post(
  "/",
  qualificacaoSocioController.create.bind(qualificacaoSocioController)
);
qualificacaoSocioRouter.get(
  "/",
  qualificacaoSocioController.findAll.bind(qualificacaoSocioController)
);
qualificacaoSocioRouter.get(
  "/:id",
  qualificacaoSocioController.findOne.bind(qualificacaoSocioController)
);
qualificacaoSocioRouter.put(
  "/:id",
  qualificacaoSocioController.update.bind(qualificacaoSocioController)
);
qualificacaoSocioRouter.delete(
  "/:id",
  qualificacaoSocioController.delete.bind(qualificacaoSocioController)
);

// Referência routes
const referenciaRouter = Router();
referenciaRouter.post(
  "/",
  referenciaController.create.bind(referenciaController)
);
referenciaRouter.get(
  "/",
  referenciaController.findAll.bind(referenciaController)
);
referenciaRouter.get(
  "/:id",
  referenciaController.findOne.bind(referenciaController)
);
referenciaRouter.put(
  "/:id",
  referenciaController.update.bind(referenciaController)
);
referenciaRouter.delete(
  "/:id",
  referenciaController.delete.bind(referenciaController)
);

// Mount all reference routes
referenceRouter.use("/cnae", cnaeRouter);
referenceRouter.use("/natureza-juridica", naturezaJuridicaRouter);
referenceRouter.use("/pais", paisRouter);
referenceRouter.use("/municipio", municipioRouter);
referenceRouter.use("/motivo", motivoRouter);
referenceRouter.use("/qualificacao-socio", qualificacaoSocioRouter);
referenceRouter.use("/referencia", referenciaRouter);

export { referenceRouter };
