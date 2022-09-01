import express from "express";
import { loginUser, registerUser, deleteUser, getUsers, updateUser, logoutUser } from "../controllers/User.controller.js";
import { UserValidator } from "../validators/validator.js";

const user = express.Router();

const requiresLogout = (req, res, next) => {
  if (req.session && req.session.user) {
    return res.json({ err: "You must be Logout in to Login continue" });
  }
  else {
    return next();
  }
}

const requiresLogin = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.json({ err: "You must be logged in to view this page." });
  }
}

user.get("/users", getUsers);
user.post("/user/register", UserValidator, registerUser);
user.post("/user/login", requiresLogout, loginUser);
user.get("/user/logout", requiresLogin, logoutUser);
user.put("/users", updateUser);
user.delete("/users/:id", deleteUser);

export default user;