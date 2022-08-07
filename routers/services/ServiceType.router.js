import express from "express";
import { createServiceType, deleteServiceType, getServiceType, updateServiceType } from "../../controllers/sevice.controller/ServiceType.controller.js";

const serviceType = express.Router();

serviceType.get("/service-type", getServiceType);
serviceType.post("/service-type", createServiceType);
serviceType.put("/service-type", updateServiceType);
serviceType.delete("/service-type/:id", deleteServiceType);

export default serviceType;