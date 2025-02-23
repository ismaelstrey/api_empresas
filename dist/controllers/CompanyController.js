"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CompanyController {
    async create(req, res) {
        try {
            const { name, cnpj, address, phone } = req.body;
            const company = await prisma.company.create({
                data: {
                    name,
                    cnpj,
                    address,
                    phone,
                },
            });
            return res.status(201).json(company);
        }
        catch (error) {
            console.error("Error creating company:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
    async findAll(req, res) {
        try {
            const companies = await prisma.company.findMany();
            return res.json(companies);
        }
        catch (error) {
            console.error("Error fetching companies:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
exports.CompanyController = CompanyController;
