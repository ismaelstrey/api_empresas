import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
import { PrismaClient } from "@prisma/client";
import { docsRouter } from "./routes/docs.routes";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
let server: any;

// Middleware
app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Documentation routes
app.use("/api/docs", docsRouter);

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    database: "connected",
  });
});

// API routes
app.use("/api", router);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Graceful shutdown
const gracefulShutdown = async () => {
  console.log("Received shutdown signal. Starting graceful shutdown...");

  if (server) {
    server.close(async () => {
      console.log("HTTP server closed.");
      await prisma.$disconnect();
      console.log("Database connections closed.");
      process.exit(0);
    });

    // Force shutdown after timeout
    setTimeout(() => {
      console.error(
        "Could not close connections in time, forcefully shutting down"
      );
      process.exit(1);
    }, 10000);
  }
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

const PORT = process.env.PORT || 3001;

server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log(`- Health check: http://localhost:${PORT}/health`);
  console.log(`- API base: http://localhost:${PORT}/api`);
  console.log(`- API documentation: http://localhost:${PORT}/api/docs`);

  // Send ready signal to PM2
  if (process.send) {
    process.send("ready");
  }
});
