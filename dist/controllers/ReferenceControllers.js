"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenciaController = exports.QualificacaoSocioController = exports.MotivoController = exports.MunicipioController = exports.PaisController = exports.NaturezaJuridicaController = exports.CnaeController = void 0;
const client_1 = require("@prisma/client");
const BaseController_1 = require("./BaseController");
const prisma = new client_1.PrismaClient();
// CNAE Controller
class CnaeController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.cnae, "CNAE");
    }
}
exports.CnaeController = CnaeController;
// Natureza Jurídica Controller
class NaturezaJuridicaController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.natureza_juridica, "Natureza Jurídica");
    }
}
exports.NaturezaJuridicaController = NaturezaJuridicaController;
// País Controller
class PaisController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.pais, "País");
    }
}
exports.PaisController = PaisController;
// Município Controller
class MunicipioController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.municipio, "Município");
    }
}
exports.MunicipioController = MunicipioController;
// Motivo Controller
class MotivoController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.motivo, "Motivo");
    }
}
exports.MotivoController = MotivoController;
// Qualificação Sócio Controller
class QualificacaoSocioController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.qualificacao_socio, "Qualificação Sócio");
    }
}
exports.QualificacaoSocioController = QualificacaoSocioController;
// Referência Controller
class ReferenciaController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.referencia, "Referência");
    }
}
exports.ReferenciaController = ReferenciaController;
