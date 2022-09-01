import { UserModel } from "../models/User.model.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const isUser = await UserModel.findOne({ email: req.body.email });
    if (isUser == null) {
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
          return next(err);
        }
        const user = new UserModel(req.body);
        user.role = "customer";
        user.password = hash;
        user.passwordConfirm = hash;
        await user.save();
        res.status(201).json(user);
      })
    }
    else {
      res.status(500).json({ error: "Email has been used" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const loginUser = (req, res) => {
  UserModel.findOne({ username: req.body.username }).exec(function (err, user) {
    if (err) {
      return res.json({ err });
    } else if (!user) {
      return res.json({ err: "Username and Password are incorrect" });
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result === true) {
        req.session.user = user;
        res.json({
          user: {
            username: user.username,
            role: user.role,
            avatar: user.avatar || ""
          },
          login: "success",
        });
      } else {
        return res.json({ err: "Username and Password are incorrect" });
      }
    });
  });
}

export const logoutUser = (req, res) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return res.json({ err });
      } else {
        return res.json({ logout: "Success" });
      }
    });
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
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};