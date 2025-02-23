import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CompanyController {
  async create(req: Request, res: Response) {
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
    } catch (error) {
      console.error("Error creating company:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const companies = await prisma.company.findMany();
      return res.json(companies);
    } catch (error) {
      console.error("Error fetching companies:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
