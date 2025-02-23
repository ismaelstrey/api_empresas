import { PrismaClient } from "@prisma/client";
import { BaseController } from "./BaseController";

const prisma = new PrismaClient();

// CNAE Controller
export class CnaeController extends BaseController {
  constructor() {
    super(prisma.cnae, "CNAE");
  }
}

// Natureza Jurídica Controller
export class NaturezaJuridicaController extends BaseController {
  constructor() {
    super(prisma.natureza_juridica, "Natureza Jurídica");
  }
}

// País Controller
export class PaisController extends BaseController {
  constructor() {
    super(prisma.pais, "País");
  }
}

// Município Controller
export class MunicipioController extends BaseController {
  constructor() {
    super(prisma.municipio, "Município");
  }
}

// Motivo Controller
export class MotivoController extends BaseController {
  constructor() {
    super(prisma.motivo, "Motivo");
  }
}

// Qualificação Sócio Controller
export class QualificacaoSocioController extends BaseController {
  constructor() {
    super(prisma.qualificacao_socio, "Qualificação Sócio");
  }
}

// Referência Controller
export class ReferenciaController extends BaseController {
  constructor() {
    super(prisma.referencia, "Referência");
  }
}
