import experss from "express";
import { createExperts, deleteExperts, getExperts, updateExperts } from "../controllers/Expert.controller.js";

const expert = experss.Router();

expert.get("/expert", getExperts);
expert.post("/expert", createExperts);
expert.put("/expert", updateExperts);
expert.delete("/expert", deleteExperts);

export default expert;