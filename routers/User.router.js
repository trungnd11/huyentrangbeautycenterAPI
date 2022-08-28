import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/User.controller.js";

const user = express.Router();

user.get("/uses", getUsers);
user.post("/uses", createUser);
user.put("/uses", updateUser);
user.delete("/uses/:id", deleteUser);

export default user;