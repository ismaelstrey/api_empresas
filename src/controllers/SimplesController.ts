import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { BaseController } from "./BaseController";

const prisma = new PrismaClient();

export class SimplesController extends BaseController {
  constructor() {
    super(prisma.simples, "Simples");
  }

  // Custom method to search by CNPJ básico
  async findByCnpjBasico(req: Request, res: Response) {
    try {
      const { cnpj_basico } = req.params;
      const simples = await prisma.simples.findFirst({
        where: { cnpj_basico },
      });

      if (!simples) {
        return res.status(404).json({ error: "Simples record not found" });
      }

      return res.json(simples);
    } catch (error) {
      console.error("Error searching simples by CNPJ básico:", error);
      return res.status(500).json({ error: "Error searching simples" });
    }
  }

  // Custom method to find companies in Simples Nacional
  async findSimples(req: Request, res: Response) {
    try {
      const simples = await prisma.simples.findMany({
        where: {
          opcao_simples: "S",
        },
      });

      return res.json(simples);
    } catch (error) {
      console.error("Error searching companies in Simples:", error);
      return res
        .status(500)
        .json({ error: "Error searching companies in Simples" });
    }
  }

  // Custom method to find MEI companies
  async findMEI(req: Request, res: Response) {
    try {
      const mei = await prisma.simples.findMany({
        where: {
          opcao_mei: "S",
        },
      });

      return res.json(mei);
    } catch (error) {
      console.error("Error searching MEI companies:", error);
      return res.status(500).json({ error: "Error searching MEI companies" });
    }
  }
}
