import express from "express";
import { createMesengerHeader, deleteMesengerHeader, getMesengerHeader, updateMesengerHeader } from "../controllers/MesengerHeader.controller.js";

const mesengerHeader = express.Router();

mesengerHeader.get("/mesenger-header", getMesengerHeader);
mesengerHeader.post("/mesenger-header", createMesengerHeader);
mesengerHeader.put("/mesenger-header", updateMesengerHeader);
mesengerHeader.delete("/mesenger-header",deleteMesengerHeader);

export default mesengerHeader;