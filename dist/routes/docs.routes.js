"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsRouter = void 0;
const express_1 = require("express");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const docsRouter = (0, express_1.Router)();
exports.docsRouter = docsRouter;
// Serve Swagger UI
docsRouter.use("/", swagger_ui_express_1.default.serve);
docsRouter.get("/", swagger_ui_express_1.default.setup(swagger_json_1.default, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "BAC Empresas API Documentation",
}));
