import { UserModel } from "../models/User.model.js";
import { RoleModel } from "../models/Role.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN, REFRESH_TOKEN, ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE } from "../config/auth.config.js";
import { TokenModel } from "../models/Token.model.js";
import { generateToken, verifyToken } from "../jwtHelper/jwtHelper.js";
import { UserInfoModel } from "../models/UserInfo.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find().populate("roles").exec();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const reqRoles = req.body.roles;
    const roles = await RoleModel.find({
      name: { $in: reqRoles },
    });
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      roles: roles.map(({ _id }) => _id),
    });
    await newUser.save();
    const userInfo = new UserInfoModel({
      userId: newUser._id
    });
    await userInfo.save();
    return res.status(201).json({
      success: `User ${newUser.username} was registered successfully!`,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    })
      .populate("roles")
      .exec();
    if (!user) res.status(400).json({ err: "User can not found" });
    const checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPassword) res.status(401).json({ err: "Invalid password" });
    const author = user.roles.map((role) => {
      return `ROLE_${role.name.toUpperCase()}`;
    });
    const token = generateToken(user, ACCESS_TOKEN, ACCESS_TOKEN_LIFE);

    const refreshToken = generateToken(user, REFRESH_TOKEN, REFRESH_TOKEN_LIFE);
    
    const newToken = new TokenModel({
      code: refreshToken
    });
    await newToken.save();

    return res.status(200).json({
      username: user.username,
      avatar: user.avatar || "",
      roles: author,
      accessToken: token,
      refreshToken: refreshToken,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const refreshToken = async (req, res) => {
  const reqRefreshToken = req.body.refreshToken;
  try {
    const token = await TokenModel.findOne({ code: reqRefreshToken });
    const decode = verifyToken(token.code, REFRESH_TOKEN);
    console.log(decode);
    const newToken = generateToken({ _id: decode.id }, ACCESS_TOKEN, ACCESS_TOKEN_LIFE);
    return res.status(200).json({ accessToken: newToken });
  } catch (error) {
    return res.status(500).json({ err: "Token not found" });
  }
}

export const logoutUser = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    const token = await TokenModel.remove({
      code: refreshToken,
    });
    return res.status(400).json({ deleted: token });
  } catch (error) {
    return res.status(500).json({ err: "Token not found" });
  }

};

export const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await UserModel.remove({ _id: req.params.id });
    const deleteInfo = await UserInfoModel.remove({ userId: req.params.id });
    res.status(200).json({ deleteUser, deleteInfo });
  } catch (error) {
    res.status(500).json({ error });
  }
};
