import express from "express";
import { createAddress, getAddress, updateAddress } from "../controllers/Address.controller.js";

const address = express.Router();

address.get("/address", getAddress);
address.post("/address", createAddress);
address.put("/address", updateAddress);

export default address;