"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const CompanyController_1 = require("../controllers/CompanyController");
const companyRouter = (0, express_1.Router)();
exports.companyRouter = companyRouter;
const companyController = new CompanyController_1.CompanyController();
companyRouter.post("/", companyController.create);
companyRouter.get("/", companyController.findAll);
