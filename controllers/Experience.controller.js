import { ExperienceModel } from "../models/Experience.model.js";

export const getExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.find();
    return res.status(200).json(experience);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createExperience = async (req, res) => {
  try {
    const experience = new ExperienceModel(req.body);
    experience.save();
    return res.status(201).json(experience);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true });
    return res.status(201).json(experience);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await ExperienceModel.remove({ _id: req.params.id });
    return res.status(200).json(experience);
  } catch (error) {
    return res.status(500).json({ error });
  }
};