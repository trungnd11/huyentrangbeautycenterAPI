import express from "express";
import { createAbout, deleteAbout, getAbout, updateAbout } from "../controllers/About.controller.js";
import authJwt from "../middlewares/authJwt.js";

const about = express.Router();

about.get("/about", getAbout);
about.post("/about",[authJwt.verifyToken, authJwt.isAdmin], createAbout);
about.put("/about",[authJwt.verifyToken, authJwt.isAdmin], updateAbout);
about.delete("/about/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteAbout);

export default about;