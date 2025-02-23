"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const empresas_routes_1 = require("./empresas.routes");
const estabelecimento_routes_1 = require("./estabelecimento.routes");
const socios_routes_1 = require("./socios.routes");
const simples_routes_1 = require("./simples.routes");
const reference_routes_1 = require("./reference.routes");
const router = (0, express_1.Router)();
exports.router = router;
// Mount all routes
router.use("/empresas", empresas_routes_1.empresasRouter);
router.use("/estabelecimentos", estabelecimento_routes_1.estabelecimentoRouter);
router.use("/socios", socios_routes_1.sociosRouter);
router.use("/simples", simples_routes_1.simplesRouter);
router.use("/referencias", reference_routes_1.referenceRouter);
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
