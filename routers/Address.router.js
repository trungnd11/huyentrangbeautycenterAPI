import express from "express";
import { createAddress, deleteAddress, getAddress, updateAddress } from "../controllers/Address.controller.js";
import authJwt from "../middlewares/authJwt.js";

const address = express.Router();

address.get("/address", getAddress);
address.post("/address",[authJwt.verifyToken, authJwt.isAdmin], createAddress);
address.put("/address",[authJwt.verifyToken, authJwt.isAdmin], updateAddress);
address.delete("/address",[authJwt.verifyToken, authJwt.isAdmin], deleteAddress);

export default address;