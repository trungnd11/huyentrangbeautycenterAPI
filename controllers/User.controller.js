import { UserModel } from "../models/User.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = UserModel.findOneAndUpdate(
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