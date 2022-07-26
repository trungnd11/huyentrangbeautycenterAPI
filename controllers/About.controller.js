import { AboutModel } from "../models/About.model.js";

export const getAbout = async (req, res) => {
  try {
    const about = await AboutModel.find();
    return res.status(200).json(about);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createAbout = async (req, res) => {
  try {
    const about = new AboutModel(req.body);
    await about.save();
    return res.status(201).json(about);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const updateAbout = async (req, res) => {
  try {
    const about = await AboutModel.findOneAndUpdate({ _id: req.body._id }, req.body, {
      new: true
    });
    return res.status(201).json(about);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    const about = await AboutModel.remove(
      { _id: req.body._id }
    );
    return res.status(200).json(about);
  } catch (error) {
    return res.status(500).json({ error });
  }
};