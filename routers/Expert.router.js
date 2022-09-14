import experss from "express";
import { createExperts, deleteExperts, getExperts, updateExperts } from "../controllers/Expert.controller.js";
import authJwt from "../middlewares/authJwt.js";

const expert = experss.Router();

expert.get("/expert", getExperts);
expert.post("/expert",[authJwt.verifyToken, authJwt.isAdmin], createExperts);
expert.put("/expert",[authJwt.verifyToken, authJwt.isAdmin], updateExperts);
expert.delete("/expert",[authJwt.verifyToken, authJwt.isAdmin], deleteExperts);

export default expert;