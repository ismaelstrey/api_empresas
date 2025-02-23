import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BaseController } from "./BaseController";

const prisma = new PrismaClient();

export class EmpresasController extends BaseController {
  constructor() {
    super(prisma.empresas, "Empresa");
  }

  // Custom method to search by CNPJ
  async findByCnpj(req: Request, res: Response) {
    try {
      const { cnpj_basico } = req.params;
      const empresa = await prisma.empresas.findFirst({
        where: { cnpj_basico },
      });

      if (!empresa) {
        return res.status(404).json({ error: "Empresa not found" });
      }

      return res.json(empresa);
    } catch (error) {
      console.error("Error searching empresa by CNPJ:", error);
      return res.status(500).json({ error: "Error searching empresa" });
    }
  }

  // Custom method to search by razão social
  async searchByName(req: Request, res: Response) {
    try {
      const { name } = req.query;
      const empresas = await prisma.empresas.findMany({
        where: {
          razao_social: {
            contains: String(name),
          },
        },
      });

      return res.json(empresas);
    } catch (error) {
      console.error("Error searching empresas by name:", error);
      return res.status(500).json({ error: "Error searching empresas" });
    }
  }
}
