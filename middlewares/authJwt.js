import jwt from "jsonwebtoken";
import { ACCESS_TOKEN } from "../config/auth.config.js";
import { UserModel } from "../models/User.model.js";
import { RoleModel } from "../models/Role.model.js";
import { ROLE_ADMIN, ROLE_CUSTOMER } from "../constant/ROLE.js";

const verifyToken = (req, res, next) => {
  const authorHeaders = req.headers["authorization"];
  if(!authorHeaders) res.status(401).json({ err: "Unauthorized!" });
  const token = authorHeaders && authorHeaders.split(" ")[1];

  if (!token) {
    return res.status(401);
  }

  jwt.verify(token, ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ err: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    const roles = await RoleModel.find({ _id: { $in: user.roles } });
    for (const role of roles) {
      if (role.name === ROLE_ADMIN) next();
    }
  } catch (error) {
    return res.status(403).json({ err: "Forbidden" });
  }
}

const isCustomer = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.userId });
    const roles = await RoleModel.find({ _id: { $in: user.roles } });
    for (const role of roles) {
      if (role.name === ROLE_CUSTOMER) next();
    }
  } catch (error) {
    return res.status(403).json({ err: "Forbidden" });
  }
};

const authJwt = {
  verifyToken,
  isAdmin,
  isCustomer
}

export default authJwt;