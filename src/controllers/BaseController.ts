import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class BaseController {
  protected model: any;
  protected modelName: string;

  constructor(model: any, modelName: string) {
    this.model = model;
    this.modelName = modelName;
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await this.model.create({
        data,
      });
      return res.status(201).json(result);
    } catch (error) {
      console.error(`Error creating ${this.modelName}:`, error);
      return res
        .status(500)
        .json({ error: `Error creating ${this.modelName}` });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const results = await this.model.findMany();
      return res.json(results);
    } catch (error) {
      console.error(`Error fetching ${this.modelName}s:`, error);
      return res
        .status(500)
        .json({ error: `Error fetching ${this.modelName}s` });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.model.findUnique({
        where: { id: Number(id) },
      });
      if (!result) {
        return res.status(404).json({ error: `${this.modelName} not found` });
      }
      return res.json(result);
    } catch (error) {
      console.error(`Error fetching ${this.modelName}:`, error);
      return res
        .status(500)
        .json({ error: `Error fetching ${this.modelName}` });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await this.model.update({
        where: { id: Number(id) },
        data,
      });
      return res.json(result);
    } catch (error) {
      console.error(`Error updating ${this.modelName}:`, error);
      return res
        .status(500)
        .json({ error: `Error updating ${this.modelName}` });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.model.delete({
        where: { id: Number(id) },
      });
      return res.status(204).send();
    } catch (error) {
      console.error(`Error deleting ${this.modelName}:`, error);
      return res
        .status(500)
        .json({ error: `Error deleting ${this.modelName}` });
    }
  }
}
