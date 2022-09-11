import express from "express";
import {
  loginUser,
  registerUser,
  deleteUser,
  getUsers,
  updateUser,
  logoutUser,
  refreshToken,
} from "../controllers/User.controller.js";
import { UserValidator, LoginValidator } from "../validators/validator.js";
import verifySigup from "../middlewares/verifySigup.js";
import authJwt from "../middlewares/authJwt.js";

const user = express.Router();

user.get("/users", [authJwt.verifyToken, authJwt.isAdmin], getUsers);
user.post(
  "/user/register",
  [
    UserValidator,
    verifySigup.checkDuplicateUsernameOrEmail,
    verifySigup.checkRoleExisted,
  ],
  registerUser
);
user.post("/user/login", LoginValidator, loginUser);
user.post("/user/refreshToken", refreshToken);
user.get("/user/logout", logoutUser);
user.put("/users", [authJwt.verifyToken, authJwt.isAdmin], updateUser);
user.delete("/users/:id", [authJwt.verifyToken, authJwt.isAdmin], deleteUser);

export default user;
