import experss from "express";
import { createExperience, deleteExperience, getExperience, updateExperience } from "../controllers/Experience.controller.js";
import authJwt from "../middlewares/authJwt.js";

const experience = experss.Router();

experience.get("/experience", getExperience);
experience.post("/experience",[authJwt.verifyToken, authJwt.isAdmin], createExperience);
experience.put("/experience",[authJwt.verifyToken, authJwt.isAdmin], updateExperience);
experience.delete("/experience/:id",[authJwt.verifyToken, authJwt.isAdmin], deleteExperience);

export default experience;