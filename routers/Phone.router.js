import express from "express";
import { createPhone, deletePhone, getPhone, updatePhone } from "../controllers/Phone.controller.js";

const phoneNumber = express.Router();

phoneNumber.get("/phone", getPhone);
phoneNumber.post("/phone", createPhone);
phoneNumber.put("/phone", updatePhone);
phoneNumber.delete("/phone", deletePhone);

export default phoneNumber;