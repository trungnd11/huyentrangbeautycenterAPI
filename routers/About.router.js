import express from "express";
import { createAbout, deleteAbout, getAbout, updateAbout } from "../controllers/About.controller.js";

const about = express.Router();

about.get("/about", getAbout);
about.post("/about", createAbout);
about.put("/about", updateAbout);
about.delete("/about", deleteAbout);

export default about;