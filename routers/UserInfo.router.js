import express from "express";
import { getUserInfo, updateUserInfo } from "../controllers/UserInfo.controller.js";
import authJwt from "../middlewares/authJwt.js";

const userInfo = express.Router();

userInfo.get("/usersInfo", [authJwt.verifyToken, authJwt.isAdmin], getUserInfo);
userInfo.put("/userInfo", [
  authJwt.verifyToken,
], updateUserInfo);

export default userInfo;