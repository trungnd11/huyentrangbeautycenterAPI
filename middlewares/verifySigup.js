import { ROLE } from "../constant/ROLE.js";
import { UserModel } from "../models/User.model.js";

export const checkDuplicateUsernameOrEmail = (req, res, next) => {
  UserModel.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ err });
    }
    if (user) {
      return res.status(400).json({ err: "Username is already in use" });
    }
  });
  UserModel.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      return res.status(500).json({ err });
    }
    if (user) {
      return res.status(400).json({ err: "Email is already in use" });
    }
  });
  next();
}

export const checkRoleExisted = (req, res, next) => {
  const roles = req.body.roles;
  if (roles) {
    if (!Array.isArray(roles)) {
      return res.status(400).json({ err: "Roles must be an list string" });
    }
    req.body.roles.forEach((role) => {
      if (!ROLE.includes(role)) {
        return res.status(400).json({
          err: `Role ${role} does not exist`,
        });
      }
    });
  } else {
    return res.status(400).json({ err: "Role is required" });
  }
  next();
}

const verifySigup = {
  checkDuplicateUsernameOrEmail,
  checkRoleExisted
}

export default verifySigup;