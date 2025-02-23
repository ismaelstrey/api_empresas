import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BaseController } from "./BaseController";

const prisma = new PrismaClient();

export class EstabelecimentoController extends BaseController {
  constructor() {
    super(prisma.estabelecimento, "Estabelecimento");
  }

  // Custom method to search by CNPJ
  async findByCnpj(req: Request, res: Response) {
    try {
      const { cnpj } = req.params;
      const estabelecimento = await prisma.estabelecimento.findFirst({
        where: { cnpj },
      });

      if (!estabelecimento) {
        return res.status(404).json({ error: "Estabelecimento not found" });
      }

      return res.json(estabelecimento);
    } catch (error) {
      console.error("Error searching estabelecimento by CNPJ:", error);
      return res.status(500).json({ error: "Error searching estabelecimento" });
    }
  }

  // Custom method to search by nome fantasia
  async searchByName(req: Request, res: Response) {
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
    } catch (error) {
      console.error("Error searching estabelecimentos by name:", error);
      return res
        .status(500)
        .json({ error: "Error searching estabelecimentos" });
    }
  }

  // Custom method to search by location (UF and Município)
  async searchByLocation(req: Request, res: Response) {
    try {
      const { uf, municipio } = req.query;
      const estabelecimentos = await prisma.estabelecimento.findMany({
        where: {
          uf: String(uf),
          ...(municipio && { municipio: String(municipio) }),
        },
      });

      return res.json(estabelecimentos);
    } catch (error) {
      console.error("Error searching estabelecimentos by location:", error);
      return res
        .status(500)
        .json({ error: "Error searching estabelecimentos" });
    }
  }
}
