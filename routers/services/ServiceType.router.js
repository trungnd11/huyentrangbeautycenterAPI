import express from "express";
import { createServiceType, getServiceType } from "../../controllers/sevice.controller/ServiceType.controller.js";

const serviceType = express.Router();

serviceType.get("/service-type", getServiceType);
serviceType.post("/service-type", createServiceType);

export default serviceType;