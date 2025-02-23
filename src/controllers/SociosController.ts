import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BaseController } from "./BaseController";

const prisma = new PrismaClient();

export class SociosController extends BaseController {
  constructor() {
    super(prisma.socios, "Sócio");
  }

  // Custom method to search by CNPJ of the company
  async findByCompanyCnpj(req: Request, res: Response) {
    try {
      const { cnpj } = req.params;
      const socios = await prisma.socios.findMany({
        where: { cnpj },
      });

      return res.json(socios);
    } catch (error) {
      console.error("Error searching sócios by company CNPJ:", error);
      return res.status(500).json({ error: "Error searching sócios" });
    }
  }

  // Custom method to search by CPF/CNPJ of the partner
  async findByCpfCnpj(req: Request, res: Response) {
    try {
      const { cpf_cnpj } = req.params;
      const socios = await prisma.socios.findMany({
        where: { cnpj_cpf_socio: cpf_cnpj },
      });

      return res.json(socios);
    } catch (error) {
      console.error("Error searching sócio by CPF/CNPJ:", error);
      return res.status(500).json({ error: "Error searching sócio" });
    }
  }

  // Custom method to search by partner name
  async searchByName(req: Request, res: Response) {
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
    } catch (error) {
      console.error("Error searching sócios by name:", error);
      return res.status(500).json({ error: "Error searching sócios" });
    }
  }
}
