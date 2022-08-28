import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/User.controller.js";

const user = express.Router();

user.get("/users", getUsers);
user.post("/users", createUser);
user.put("/users", updateUser);
user.delete("/users/:id", deleteUser);

export default user;