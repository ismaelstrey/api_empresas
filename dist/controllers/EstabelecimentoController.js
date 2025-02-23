"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstabelecimentoController = void 0;
const client_1 = require("@prisma/client");
const BaseController_1 = require("./BaseController");
const prisma = new client_1.PrismaClient();
class EstabelecimentoController extends BaseController_1.BaseController {
    constructor() {
        super(prisma.estabelecimento, "Estabelecimento");
    }
    // Custom method to search by CNPJ
    async findByCnpj(req, res) {
        try {
            const { cnpj } = req.params;
            const estabelecimento = await prisma.estabelecimento.findFirst({
                where: { cnpj },
            });
            if (!estabelecimento) {
                return res.status(404).json({ error: "Estabelecimento not found" });
            }
            return res.json(estabelecimento);
        }
        catch (error) {
            console.error("Error searching estabelecimento by CNPJ:", error);
            return res.status(500).json({ error: "Error searching estabelecimento" });
        }
    }
    // Custom method to search by nome fantasia
    async searchByName(req, res) {
        try {
            const { name } = req.query;
            const estabelecimentos = await prisma.estabelecimento.findMany({
                where: {
                    nome_fantasia: {
                        contains: String(name),
                    },
                },
            });
            return res.json(estabelecimentos);
        }
        catch (error) {
            console.error("Error searching estabelecimentos by name:", error);
            return res
                .status(500)
                .json({ error: "Error searching estabelecimentos" });
        }
    }
    // Custom method to search by location (UF and Município)
    async searchByLocation(req, res) {
        try {
            const { uf, municipio } = req.query;
            const estabelecimentos = await prisma.estabelecimento.findMany({
                where: {
                    uf: String(uf),
                    ...(municipio && { municipio: String(municipio) }),
                },
            });
            return res.json(estabelecimentos);
        }
        catch (error) {
            console.error("Error searching estabelecimentos by location:", error);
            return res
                .status(500)
                .json({ error: "Error searching estabelecimentos" });
        }
    }
}
exports.EstabelecimentoController = EstabelecimentoController;
