"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SociosController = void 0;
const client_1 = require("@prisma/client");
const BaseController_1 = require("./BaseController");
const prisma = new client_1.PrismaClient();
class SociosController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.socios, "Sócio");
    }
    // Custom method to search by CNPJ of the company
    async findByCompanyCnpj(req, res) {
        try {
            const { cnpj } = req.params;
            const socios = await prisma.socios.findMany({
                where: { cnpj },
            });
            return res.json(socios);
        }
        catch (error) {
            console.error("Error searching sócios by company CNPJ:", error);
            return res.status(500).json({ error: "Error searching sócios" });
        }
    }
    // Custom method to search by CPF/CNPJ of the partner
    async findByCpfCnpj(req, res) {
        try {
            const { cpf_cnpj } = req.params;
            const socios = await prisma.socios.findMany({
                where: { cnpj_cpf_socio: cpf_cnpj },
            });
            return res.json(socios);
        }
        catch (error) {
            console.error("Error searching sócio by CPF/CNPJ:", error);
            return res.status(500).json({ error: "Error searching sócio" });
        }
    }
    // Custom method to search by partner name
    async searchByName(req, res) {
        try {
            const { name } = req.query;
            const socios = await prisma.socios.findMany({
                where: {
                    nome_socio: {
                        contains: String(name),
                    },
                },
            });
            return res.json(socios);
        }
        catch (error) {
            console.error("Error searching sócios by name:", error);
            return res.status(500).json({ error: "Error searching sócios" });
        }
    }
}
exports.SociosController = SociosController;
