import experss from "express";
import { createExperience, deleteExperience, getExperience, updateExperience } from "../controllers/Experience.controller.js";

const experience = experss.Router();

experience.get("/experience", getExperience);
experience.post("/experience", createExperience);
experience.put("/experience", updateExperience);
experience.delete("/experience", deleteExperience);

export default experience;