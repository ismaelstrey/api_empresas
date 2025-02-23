import { Router } from "express";
import { empresasRouter } from "./empresas.routes";
import { estabelecimentoRouter } from "./estabelecimento.routes";
import { sociosRouter } from "./socios.routes";
import { simplesRouter } from "./simples.routes";
import { referenceRouter } from "./reference.routes";

const router = Router();

// Mount all routes
router.use("/empresas", empresasRouter);
router.use("/estabelecimentos", estabelecimentoRouter);
router.use("/socios", sociosRouter);
router.use("/simples", simplesRouter);
router.use("/referencias", referenceRouter);

// Base route
router.get("/", (req, res) => {
  res.json({
    message: "BAC Empresas API",
    version: "1.0.0",
    endpoints: {
      empresas: "/api/empresas",
      estabelecimentos: "/api/estabelecimentos",
      socios: "/api/socios",
      simples: "/api/simples",
      referencias: {
        cnae: "/api/referencias/cnae",
        naturezaJuridica: "/api/referencias/natureza-juridica",
        pais: "/api/referencias/pais",
        municipio: "/api/referencias/municipio",
        motivo: "/api/referencias/motivo",
        qualificacaoSocio: "/api/referencias/qualificacao-socio",
        referencia: "/api/referencias/referencia",
      },
    },
  });
});

export { router };
