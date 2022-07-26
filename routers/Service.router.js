import express from "express";
import { createService, deleteService, getService, updateService } from "../controllers/Service.controller.js";

const service = express.Router();

service.get("/service", getService);
service.post("/service", createService);
service.put("/service", updateService);
service.delete("/service", deleteService);

export default service;