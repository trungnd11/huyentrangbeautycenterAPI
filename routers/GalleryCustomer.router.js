import express from "express";
import { createGalleryCustomer, deleteGalleryCustomer, getGalleryCustomer, getGalleryCustomerLimit, updateGalleryCustomer } from "../controllers/GallertyCustomer.controller.js";

const galleryCustomer = express.Router();

galleryCustomer.get("/gallery-customer", getGalleryCustomer);
galleryCustomer.get("/gallery-customer/limit-:limit", getGalleryCustomerLimit);
galleryCustomer.post("/gallery-customer", createGalleryCustomer);
galleryCustomer.put("/gallery-customer", updateGalleryCustomer);
galleryCustomer.delete("/gallery-customer", deleteGalleryCustomer);

export default galleryCustomer;