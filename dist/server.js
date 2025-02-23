"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const client_1 = require("@prisma/client");
const docs_routes_1 = require("./routes/docs.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
let server;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Request logging middleware
app.use((req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});
// Documentation routes
app.use("/api/docs", docs_routes_1.docsRouter);
// Health check endpoint
app.get("/health", (_req, res) => {
    res.json({
        status: "OK",
        timestamp: new Date().toISOString(),
        database: "connected",
    });
});
// API routes
app.use("/api", routes_1.router);
// 404 handler
app.use((_req, res) => {
    res.status(404).json({ error: "Route not found" });
});
// Error handling middleware
app.use((err, _req, res, _next) => {
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
            console.error("Could not close connections in time, forcefully shutting down");
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
