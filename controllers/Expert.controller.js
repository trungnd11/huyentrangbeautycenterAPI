import { ExpertModel } from "../models/Expert.model.js";

export const getExperts = async (req, res) => {
  try {
    const experts = await ExpertModel.find();
    return res.status(200).json(experts);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const createExperts = async (req, res) => {
  try {
    const experts = new ExpertModel(req.body);
    await experts.save();
    return res.status(201).json(experts);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const updateExperts = async (req, res) => {
  try {
    const experts = await ExpertModel.findOneAndUpdate({ _id: req.body._id }, res.body, { new: true });
    return res.status(201).json(experts);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const deleteExperts = async (req, res) => {
  try {
    const experts = await ExpertModel.remove(
      { _id: req.body._id }
    );
    return res.status(200).json(experts);
  } catch (error) {
    return res.status(500).json({ error });
  }
};