import express from "express";
import { createService, deleteService, getService, getServiceLimit, updateService } from "../../controllers/sevice.controller/Service.controller.js";

const service = express.Router();

service.get("/service", getService);
service.get("/service/limit-:limit", getServiceLimit);
service.post("/service", createService);
service.put("/service", updateService);
service.delete("/service", deleteService);

export default service;