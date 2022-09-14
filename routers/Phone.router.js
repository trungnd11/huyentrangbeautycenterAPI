import express from "express";
import { createPhone, deletePhone, getPhone, updatePhone } from "../controllers/Phone.controller.js";
import authJwt from "../middlewares/authJwt.js";

const phoneNumber = express.Router();

phoneNumber.get("/phone", getPhone);
phoneNumber.post("/phone",[authJwt.verifyToken, authJwt.isAdmin], createPhone);
phoneNumber.put("/phone",[authJwt.verifyToken, authJwt.isAdmin], updatePhone);
phoneNumber.delete("/phone",[authJwt.verifyToken, authJwt.isAdmin], deletePhone);

export default phoneNumber;