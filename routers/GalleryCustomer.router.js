import express from "express";
import { createGalleryCustomer, deleteGalleryCustomer, getGalleryCustomer, getGalleryCustomerLimit, updateGalleryCustomer } from "../controllers/GallertyCustomer.controller.js";
import authJwt from "../middlewares/authJwt.js";

const galleryCustomer = express.Router();

galleryCustomer.get("/gallery-customer", getGalleryCustomer);
galleryCustomer.get("/gallery-customer/limit-:limit", getGalleryCustomerLimit);
galleryCustomer.post("/gallery-customer",[authJwt.verifyToken, authJwt.isAdmin], createGalleryCustomer);
galleryCustomer.put("/gallery-customer",[authJwt.verifyToken, authJwt.isAdmin], updateGalleryCustomer);
galleryCustomer.delete("/gallery-customer",[authJwt.verifyToken, authJwt.isAdmin], deleteGalleryCustomer);

export default galleryCustomer;